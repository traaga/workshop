import { useContext, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../other/useWindowDimensions";

const Home = () => {
    const { titleFull } = useContext(GlobalStateContext);
    const { width } = useWindowDimensions();

    document.title = "Avaleht | " + titleFull;

    // TODO: Fix this bs with react-router - or is it bs?
    const navigate = useNavigate();
    useEffect(() => {
        if (document.location.pathname === "/workshop") {
            navigate("/");
            window.location.reload();
        }
    });

    return (
        <>
            <NavigationBar/>
            <ContentContainer>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {width < 1261 ? (
                        <Box
                            component="img"
                            sx={{
                                height: width >= 900 ? "calc(100vh - 128px)" : "calc(100vh - 96px)",
                            }}
                            src="images/taust3.jpg"
                        />
                    ) : (
                        <>
                            <Box
                                component="img"
                                sx={{
                                    width: "100%",
                                }}
                                src="images/taust3.jpg"
                            />
                        </>
                    )}
                </Box>

                <Typography>Kirjeldus, Video+pildid, missioon</Typography>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Home;
