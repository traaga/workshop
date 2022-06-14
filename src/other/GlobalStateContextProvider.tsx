import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { User } from "firebase/auth";

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const titleShort = "FT";
    const titleFull = "Fellini Töökoda";

    return (
        <GlobalStateContext.Provider
            value={{ titleShort, titleFull, user, setUser }}>
            {children}
        </GlobalStateContext.Provider>
    );
}
