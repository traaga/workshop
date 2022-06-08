import React, { createContext } from "react";

export interface GlobalStateContextProps {
    titleShort: string;
    titleFull: string;
    isAuthenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    avatarSrc: string;
}

export const initialState: GlobalStateContextProps = {
    titleShort: "",
    titleFull: "",
    isAuthenticated: false,
    setAuthenticated: () => null,
    avatarSrc: ""
}

export const GlobalStateContext = createContext<GlobalStateContextProps>(initialState);
