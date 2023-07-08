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
  pickupDate: string;
  setPickupDate: Dispatch<SetStateAction<string>>;
  pickupTime: string;
  setPickupTime: Dispatch<SetStateAction<string>>;
  dropOffDate: string;
  setDropOffDate: Dispatch<SetStateAction<string>>;
  dropOffTime: string;
  setDropOffTime: Dispatch<SetStateAction<string>>;
  totalDays: number;
  setTotalDays: Dispatch<SetStateAction<number>>;
  totalHours: number;
  setTotalHours: Dispatch<SetStateAction<number>>;
  totalMinutes: number;
  setTotalMinutes: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
  favArray: [],
  setFavArray: (): CarProps[] => [],
  addCart: [],
  setAddCart: (): CarProps[] => [],
  pickupDate: "",
  setPickupDate: (): string => "",
  pickupTime: "",
  setPickupTime: (): string => "",
  dropOffDate: "",
  setDropOffDate: (): string => "",
  dropOffTime: "",
  setDropOffTime: (): string => "",
  totalDays: 0,
  setTotalDays: (): number => 0,
  totalHours: 0,
  setTotalHours: (): number => 0,
  totalMinutes: 0,
  setTotalMinutes: (): number =>0,
});

export const GlobalContextProvider = ({ children }: any) => {
  const [favArray, setFavArray] = useState<[] | CarProps[]>([]);
  const [addCart, setAddCart] = useState<[] | CarProps[]>([]);

  const [pickupDate, setPickupDate] = useState<string>("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [totalDays, setTotalDays] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        favArray,
        setFavArray,
        addCart,
        setAddCart,
        pickupDate,
        setPickupDate,
        pickupTime,
        setPickupTime,
        dropOffDate,
        setDropOffDate,
        dropOffTime,
        setDropOffTime,totalDays, setTotalDays, totalHours, setTotalHours, totalMinutes, setTotalMinutes
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
