import React, { useState } from "react";
import { GlobalStateContext, User } from "./GlobalStateContext";

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const titleShort = "FT";
    const titleFull = "Fellini Töökoda";
    const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

    return (
        <GlobalStateContext.Provider
            value={{ titleShort, titleFull, isDevelopment, user, setUser }}>
            {children}
        </GlobalStateContext.Provider>
    );
}
