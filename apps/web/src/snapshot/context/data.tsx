import { createContext, useContext } from "react";

const DataContext = createContext<any>(null);

// プリレンダリングでAPIのデータを取得したデータをここで保持する
export const DataProvider: React.FC<{
  children: React.ReactNode;
  data: any;
}> = ({ children, data }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = <T extends unknown>(): T => {
  const data = useContext<T>(DataContext);
  return data;
};
