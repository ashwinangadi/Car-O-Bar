"use client";
import { CarProps, CarState } from "@types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ContextProps {
  favArray: CarProps[];
  setFavArray: Dispatch<SetStateAction<CarProps[]>>;
  addCart: CarProps[];
  setAddCart: Dispatch<SetStateAction<CarProps[]>>;

  totalDays: number;
  setTotalDays: Dispatch<SetStateAction<number>>;
  totalHours: number;
  setTotalHours: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  favArray: [],
  setFavArray: (): CarProps[] => [],
  addCart: [],
  setAddCart: (): CarProps[] => [],

  totalDays: 0,
  setTotalDays: (): number => 0,
  totalHours: 0,
  setTotalHours: (): number => 0,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [favArray, setFavArray] = useState<[] | CarProps[]>([]);
  const [addCart, setAddCart] = useState<[] | CarProps[]>([]);

  const [totalDays, setTotalDays] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        favArray,
        setFavArray,
        addCart,
        setAddCart,
        totalDays,
        setTotalDays,
        totalHours,
        setTotalHours,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
