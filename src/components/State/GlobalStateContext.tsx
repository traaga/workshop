import { createContext } from "react";

export interface GlobalStateContextProps {
    titleShort: string;
    titleFull: string;
    isAuthenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const initialState: GlobalStateContextProps = {
    titleShort: "",
    titleFull: "",
    isAuthenticated: false,
    setAuthenticated: () => null
}

export const GlobalStateContext = createContext<GlobalStateContextProps>(initialState);
