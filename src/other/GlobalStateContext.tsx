import React, { createContext } from "react";
import { Test } from "../other/Firebase";

export interface GlobalStateContextProps {
    titleShort: string;
    titleFull: string;
    isAuthenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    bookings: Test[];
    setBookings: React.Dispatch<React.SetStateAction<Test[]>>;
}

export const initialState: GlobalStateContextProps = {
    titleShort: "",
    titleFull: "",
    isAuthenticated: false,
    setAuthenticated: () => null,
    bookings: [],
    setBookings: () => null
}

export const GlobalStateContext = createContext<GlobalStateContextProps>(initialState);
