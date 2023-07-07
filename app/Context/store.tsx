'use client';
import { CarProps, CarState } from "@types";
import { Dispatch, SetStateAction, createContext, useContext, useState} from "react";

interface ContextProps{
    favArray : CarProps[];
    setFavArray: Dispatch<SetStateAction<CarProps[]>>;
    addCart : CarProps[];
    setAddCart: Dispatch<SetStateAction<CarProps[]>>;
}

const GlobalContext = createContext<ContextProps>({
    favArray : [],
    setFavArray: () : CarProps[] => [],
    addCart : [],
    setAddCart: () : CarProps[] => []
});

export const GlobalContextProvider = ({children}: any)=>{

    const [favArray, setFavArray] = useState<[] | CarProps[]>([]);
    const [addCart, setAddCart] = useState<[] | CarProps[]>([])


    return(
        <GlobalContext.Provider value={{favArray, setFavArray, addCart, setAddCart}}>
            {children}
        </GlobalContext.Provider>
    )

}

export const useGlobalContext = () => useContext(GlobalContext);