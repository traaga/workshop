import {useContext} from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import {Box, Button, Typography} from "@mui/material";
import {GlobalStateContext} from "../other/GlobalStateContext";
import useWindowDimensions from "../other/useWindowDimensions";
import {Link} from "react-router-dom";
import texts from "../texts.json";
import CourseGoal from "../components/CourseGoal";

const InfoCenter = () => {
    const {titleFull} = useContext(GlobalStateContext);
    document.title = "Infokeskus | " + titleFull;

    const {width} = useWindowDimensions();

    const title = "Nõustamine";
    const counselingDescription = texts.counseling.split("\n");
    const counselingPrice = texts.counseling2;

    let containerLeft;
    if (width < 1200) {
        if (width < 700) {
            containerLeft = "calc((20% - 30px) / 2)";
        } else {
            containerLeft = "calc((100% - 600px) / 2)";
        }
    } else {
        containerLeft = "calc((100% - 800px) / 2)";
    }

    let containerWidth;
    if (width < 1200) {
        if (width < 700) {
            containerWidth = "80%";
        } else {
            containerWidth = "600px";
        }
    } else {
        containerWidth = "800px";
    }

    return (
        <>
            <NavigationBar/>
            <ContentContainer
                sx={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}}>

                <Box>
                    <Box
                        component="img"
                        sx={{
                            //width: "100%",
                            width: "100vw",
                            height: width >= 960 ? "calc(100vh - 128px)" : "calc(100vh - 96px)",
                            objectFit: "cover",
                        }}
                        src="images/taust1.jpg"
                    />
                    <Box sx={{
                        top: width < 700 ? "5vh" : "12vh",
                        left: containerLeft,
                        width: containerWidth,
                        position: "absolute",
                        display: "flex",
                        flexDirection: width < 700 ? "column" : "row",
                        minHeight: "500px",
                    }}>
                        <Box sx={{
                            width: width < 700 ? "100%" : "70%",
                            backgroundColor: "white",
                            opacity: "0.9",
                            padding: "15px",
                        }}>

                            {width < 390 ? <>
                                    <Typography variant="subtitle1" sx={{
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        marginBottom: "5px",
                                    }}>{title}</Typography>

                                    {counselingDescription.map((text, index) =>
                                        <Typography key={index} variant={"subtitle2"}
                                                    sx={{marginBottom: "5px", fontWeight: "400"}}>{text}</Typography>
                                    )}
                                </> :
                                <><Typography variant="h5" sx={{
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                    marginBottom: "15px",
                                }}>{title}</Typography>

                                    {counselingDescription.map((text, index) =>
                                        <Typography key={index}
                                                    sx={{marginBottom: "10px", fontWeight: "400"}}>{text}</Typography>
                                    )}
                                </>}

                        </Box>
                        <Box sx={{
                            width: width < 700 ? "100%" : "30%",
                            backgroundColor: "whitesmoke",
                            opacity: "0.9",
                            padding: "15px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}>

                            {width < 700 ?
                                width < 390 ?
                                    <Typography variant={"subtitle2"}>{counselingPrice}</Typography> :
                                    <Typography sx={{fontWeight: "500"}}>{counselingPrice}</Typography>
                                : <Typography variant={"h6"}>{counselingPrice}</Typography>}

                            {width < 390 ? <Button
                                    variant="contained"
                                    size="small"
                                    component={Link}
                                    to="/contact"
                                    sx={{textAlign: "center", marginTop: "10px"}}
                                >
                                    Võta meiega ühendust
                                </Button> :
                                <Button
                                    variant="contained"
                                    size="medium"
                                    component={Link}
                                    to="/contact"
                                    sx={{textAlign: "center", marginTop: "20px"}}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    Võta meiega ühendust
                                </Button>}

                        </Box>
                    </Box>
                </Box>

                <CourseGoal/>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default InfoCenter;
