import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from "react";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

type AxiosContextValue = {
  client: AxiosInstance;
  config: AxiosRequestConfig;
  setConfig: (config: AxiosRequestConfig) => void;
};

/**
 * Context
 */
const AxiosContext = createContext<AxiosContextValue | null>(null);

/**
 * Provider
 */
export const AxiosProvider: React.FC<{
  children: ReactNode;
  initialConfig?: AxiosRequestConfig;
  interceptors?: {
    request?: <T = any>(config: InternalAxiosRequestConfig<T>) => InternalAxiosRequestConfig<T>;
    response?: {
      onFulfilled?: <T = any>(response: AxiosResponse<T>) => AxiosResponse<T>;
      onRejected?: <T = any>(error: AxiosError<T>) => AxiosError<T>;
    };
  };
}> = ({ children, initialConfig, interceptors }) => {
  const [config, setConfig] = useState<AxiosRequestConfig>(
    initialConfig || { baseURL: "/api", timeout: 5000 }
  );

  const client = useMemo(() => axios.create(config), [config]);

  /**
   * 🚀 ここがポイント！
   * API送信前の共通処理を登録する
   */
  useEffect(() => {
    const interceptorRequest = client.interceptors.request.use(
      async (req) => {
        return interceptors?.request?.(req) ?? req;
      },
    );

    const interceptorResponse = client.interceptors.response.use(
      async (response) => {
        return interceptors?.response?.onFulfilled?.(response) ?? response;
      },
      (error) => {
        return interceptors?.response?.onRejected?.(error) ?? Promise.reject(error);
      }
    );

    // クリーンアップ（config変更時に再登録）
    return () => {
      client.interceptors.request.eject(interceptorRequest);
      client.interceptors.response.eject(interceptorResponse);
    };
  }, [client, interceptors]);

  const handleSetConfig = useCallback((newConfig: AxiosRequestConfig) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  }, []);

  const value = useMemo(
    (): AxiosContextValue => ({ client, config, setConfig: handleSetConfig }),
    [client, config, handleSetConfig]
  );

  return <AxiosContext.Provider value={value}>{children}</AxiosContext.Provider>;
};

/**
 * Hook
 */
export const useAxiosContext = () => {
  const ctx = useContext(AxiosContext);
  if (!ctx) throw new Error("useAxiosContext must be used within AxiosProvider");
  return ctx;
};