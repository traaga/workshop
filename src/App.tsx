import "./App.scss";

import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InfoCenter from "./pages/InfoCenter";
import NoPage from "./pages/NoPage";
import Settings from "./pages/Settings";
import Workshop from "./pages/Workshop";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStateProvider } from "./other/GlobalStateContextProvider";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { useContext } from "react";
import { GlobalStateContext } from "./other/GlobalStateContext";
import { CheckLogin } from "./other/Firebase";

function App() {

    CheckLogin();

    return (
        <GlobalStateProvider>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />
                                <Route path="account" element={<Account />} />
                                <Route path="contact" element={<Contact />} />
                                <Route path="infocenter" element={<InfoCenter />} />
                                <Route path="settings" element={<Settings />} />
                                <Route path="workshop" element={<Workshop />} />
                                <Route path="*" element={<NoPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </StyledEngineProvider>
        </GlobalStateProvider>
    );
}

export default App;
