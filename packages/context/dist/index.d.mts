import { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from 'axios';
import React, { ReactNode } from 'react';

type AxiosContextValue = {
    client: AxiosInstance;
    config: AxiosRequestConfig;
    setConfig: (config: AxiosRequestConfig) => void;
};
/**
 * Provider
 */
declare const AxiosProvider: React.FC<{
    children: ReactNode;
    initialConfig?: AxiosRequestConfig;
    interceptors?: {
        request?: <T = any>(config: InternalAxiosRequestConfig<T>) => InternalAxiosRequestConfig<T>;
        response?: {
            onFulfilled?: <T = any>(response: AxiosResponse<T>) => AxiosResponse<T>;
            onRejected?: <T = any>(error: AxiosError<T>) => AxiosError<T>;
        };
    };
}>;
/**
 * Hook
 */
declare const useAxiosContext: () => AxiosContextValue;

export { AxiosProvider, useAxiosContext };
