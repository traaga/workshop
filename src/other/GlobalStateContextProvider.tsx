import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { Test } from "../other/Firebase";

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [bookings, setBookings] = useState<Test[]>([]);

    const titleShort = "FT";
    const titleFull = "Fellini Töökoda";

    return (
        <GlobalStateContext.Provider
            value={{ titleShort, titleFull, isAuthenticated, setAuthenticated, bookings, setBookings }}>
            {children}
        </GlobalStateContext.Provider>
    );
}
