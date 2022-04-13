import React, { useState } from "react";
import { GlobalStateContext} from "./GlobalStateContext";

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [ isAuthenticated, setAuthenticated ] = useState(false);

    const titleShort = "FT";
    const titleFull = "Fellini Töökoda";

    return (
        <GlobalStateContext.Provider value={{ titleShort, titleFull, isAuthenticated, setAuthenticated }}>
            {children}
        </GlobalStateContext.Provider>
    );
}
