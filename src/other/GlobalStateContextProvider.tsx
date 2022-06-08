import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalStateProvider: React.FC = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const titleShort = "FT";
    const titleFull = "Fellini Töökoda";

    console.log("Generating random animal avatar for user in Global State ...")

    const avatarSrc = "images/avatar" + Math.floor(Math.random() * 6 + 1) + ".jpg";

    return (
        <GlobalStateContext.Provider
            value={{ titleShort, titleFull, isAuthenticated, setAuthenticated, avatarSrc }}>
            {children}
        </GlobalStateContext.Provider>
    );
}
