import "./App.scss";

import Account from "./components/Account/Account";
import Consulting from "./components/Consulting/Consulting";
import Contact from "./components/Contact/Contact";
import Courses from "./components/Courses/Courses";
import Home from "./components/Home/Home";
import NoPage from "./components/NoPage/NoPage";
import Opportunities from "./components/Opportunities/Opportunities";
import Prices from "./components/Prices/Prices";
import Rules from "./components/Rules/Rules";
import Settings from "./components/Settings/Settings";
import Timetable from "./components/Timetable/Timetable";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStateProvider } from "./components/State/GlobalStateContextProvider";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
    return (
        <GlobalStateProvider>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Routes>
                            <Route path="/">
                                <Route index element={<Home />} />

                                <Route path="account" element={<Account />} />
                                <Route
                                    path="consulting"
                                    element={<Consulting />}
                                />
                                <Route path="contact" element={<Contact />} />
                                <Route path="courses" element={<Courses />} />
                                <Route
                                    path="opportunities"
                                    element={<Opportunities />}
                                />
                                <Route path="prices" element={<Prices />} />
                                <Route path="rules" element={<Rules />} />
                                <Route path="settings" element={<Settings />} />
                                <Route
                                    path="timetable"
                                    element={<Timetable />}
                                />

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
