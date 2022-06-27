import React, { createContext } from "react";

export interface User {
    id: string,
    email: string,
    events: string[],
    name: string,
    phone: string,
    photo: string,
    role: string
}

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
