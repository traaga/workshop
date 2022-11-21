import {useContext, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import {Box, Typography} from "@mui/material";
import {GlobalStateContext} from "../other/GlobalStateContext";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "../other/useWindowDimensions";
import Goal from "../components/Goal";
import ParagraphTree from "../components/ParagraphTree";

const Home = () => {
    const {titleFull} = useContext(GlobalStateContext);
    const {width} = useWindowDimensions();

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

            <ContentContainer sx={{marginBottom: "100px"}}>

                <Box sx={{position: "relative"}}>
                    {width < 1279 ? (
                        <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Box
                                component="img"
                                sx={{
                                    height: width >= 1000 ? "calc(100vh - 128px)" : "calc(100vh - 96px)",
                                }}
                                src="images/taust3.jpg"
                            />
                            <Typography variant="h4" sx={{
                                top: "calc(50vh - 128px)",
                                width: "100%",
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
                                // 1315 - banner width, 466 - box width, 15 - scrollbar width
                                left: "calc(100vw - 1315px - 466px - 15px)",
                                bottom: "0px",
                                transform: "rotate(25deg)",
                                transformOrigin: "bottom right"
                            }}/>

                            <Typography variant="h3" sx={{
                                top: "calc(50vh - 128px)",
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

                            <Box sx={{display: "flex", justifyContent: "flex-end"}}>
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
                </Box>

                <Goal/>

                <ParagraphTree/>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Home;
