import { useContext, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../other/useWindowDimensions";
import Goal from "../components/Goal";

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

                {width < 1279 ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                            component="img"
                            sx={{
                                height: width >= 900 ? "calc(100vh - 128px)" : "calc(100vh - 96px)",
                            }}
                            src="images/taust3.jpg"
                        />
                        <Typography variant="h4" sx={{
                            top: "calc((100vh - 100px) / 2)", // 400
                            width: "100%", // 500
                            textAlign: "center",
                            position: "absolute",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            backgroundColor: "#ffffffa6",
                            padding: "30px 0",
                        }}>
                            Avatud
                            töökoda &
                            Infokeskus
                        </Typography>
                    </Box>
                ) : (
                    <>
                        <Box sx={{
                            width: "466px",
                            height: "1000px",
                            backgroundColor: "whitesmoke",
                            position: "absolute",
                            top: "-82px",
                            left: "max(calc(100vw - 1281px - 230px), -82px)",
                            transform: "rotate(25deg)",
                        }}/>

                        <Box sx={{
                            width: "max(calc(100vw - 1279px), 150px)",
                            height: "841px",
                            backgroundColor: "whitesmoke",
                            position: "absolute",
                        }}/>

                        <Typography variant="h3" sx={{
                            top: "475px",
                            left: (width - 1261 + 150) > 500 ? "calc((100vw - 1279px + 196px - 500px) / 2)" : "max(calc(100vw - 1279px - 50px), 100px)",
                            width: "500px",
                            textAlign: "center",
                            position: "absolute",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        }}>
                            Avatud
                            töökoda &
                            Infokeskus
                        </Typography>

                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Box
                                component="img"
                                sx={{
                                    height: "calc(100vh - 128px)"
                                }}
                                src="images/taust3.jpg"
                            />
                        </Box>
                    </>
                )}

                <Goal/>

                <Typography>Kirjeldus, Video+pildid, missioon</Typography>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Home;
