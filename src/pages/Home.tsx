import { useContext, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Home = () => {
    const { titleFull } = useContext(GlobalStateContext);
    const { width } = useWindowDimensions();

    document.title = "Avaleht | " + titleFull;

    // TODO: Fix this bs with react-router
    const navigate = useNavigate();
    useEffect(() => {
        if (document.location.pathname === "/workshop") {
            navigate("/");
            window.location.reload();
        }
    });

    const temps = [1, 2, 3];
    const render = false;

    return (
        <>
            <NavigationBar/>
            <ContentContainer>
                {/*<Box
                    width={"100%"}
                    sx={{
                        backgroundColor: "#272727",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 320,
                            width: 320,
                            paddingBottom: "40px",
                        }}
                        //src="images/icon320-square.png"
                        src="images/logo1.png"
                    />
                </Box>*/}

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
                        <Box
                            component="img"
                            sx={{
                                width: "100%",
                            }}
                            src="images/taust3.jpg"
                        />
                    )}
                </Box>

                <Typography>Kirjeldus, Video+pildid, missioon</Typography>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {render &&
                        temps.map((temp) => (
                            <Box
                                key={temp}
                                component="img"
                                sx={{
                                    height: 320,
                                    width: 320,
                                    marginBottom: "10px",
                                }}
                                src="images/logo1.png"
                            />
                        ))}
                </Box>
            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Home;
