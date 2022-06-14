import React, { createContext } from "react";
import { User } from "firebase/auth";

export interface GlobalStateContextProps {
    titleShort: string;
    titleFull: string;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const initialState: GlobalStateContextProps = {
    titleShort: "",
    titleFull: "",
    user: null,
    setUser: () => null,
}

export const GlobalStateContext = createContext<GlobalStateContextProps>(initialState);
