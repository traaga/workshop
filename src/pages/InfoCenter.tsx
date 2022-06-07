import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Box, Button, Typography } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import useWindowDimensions from "../other/useWindowDimensions";
import { Link } from "react-router-dom";

const InfoCenter = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "Infokeskus | " + titleFull;

    const { width } = useWindowDimensions();

    const title = "Nõustamine";
    const text1 = "Meie infokeskuse kaudu saab abi ning nõu paljudele sinu suurematele vana maja  või  korteriga seotud probleemidele.";
    const text2 = "Olgu nendeks väsinud aknad või ära jooksnud vundament. Tuleme kohale, vaatame olukorra üle ja teeme tegevuskava. Kui oskame ja soovite võime tööd ise ära teha.";
    const text3 = "Kui meie oskustest peaks puudu jääma siis meil on väga lai meistrite võrgustik, igal alal mitu spetsialisti, kelle pädevuses oleme kindlad ja julgeme edasi soovitada.";
    const text4 = "Nõustamiseks tuleb eraldi aeg kokku leppida, mille käigus soovime veidi eelinfot, et teaksime, kes meist oleks kõige pädevam antud objekti hindama.";
    const text5 = "Nõustamise ühe korra hind on 40 eurot, millele lisandub 0.33euro senti kilomeetri kohta.";

    let containerLeft = "calc((100% - 50%) / 2)";
    if (width < 1200) {
        if (width < 700) {
            containerLeft = "calc((20% - 30px) / 2)";
        } else {
            containerLeft = "calc((100% - 600px) / 2)";
        }
    }

    let containerWidth = "50%";
    if (width < 1200) {
        if (width < 700) {
            containerWidth = "80%";
        } else {
            containerWidth = "600px";
        }
    }

    return (
        <>
            <NavigationBar/>
            <ContentContainer sx={{ position: "relative" }}>

                <Box
                    component="img"
                    sx={{
                        width: "100%",
                        height: width >= 900 ? "calc(100vh - 128px)" : "calc(100vh - 96px)",
                        objectFit: "cover",
                    }}
                    src="images/taust1.jpg"
                />
                <Box sx={{
                    //top: "15%",
                    top: width < 500 ? "5%" : "15%",
                    left: containerLeft,
                    width: containerWidth,
                    height: width < 700 ? "auto" : "50%",
                    position: "absolute",
                    display: "flex",
                    maxWidth: "800px",
                    flexDirection: width < 700 ? "column" : "row",
                }}>
                    <Box sx={{
                        height: "100%",
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
                                <Typography variant={"subtitle2"} sx={{ marginBottom: "5px" }}>{text1}</Typography>
                                <Typography variant={"subtitle2"} sx={{ marginBottom: "5px" }}>{text2}</Typography>
                                <Typography variant={"subtitle2"} sx={{ marginBottom: "5px" }}>{text3}</Typography>
                                <Typography variant={"subtitle2"} sx={{ marginBottom: "5px" }}>{text4}</Typography>
                            </> :
                            <><Typography variant="h5" sx={{
                                textTransform: "uppercase",
                                fontWeight: "bold",
                                marginBottom: "15px",
                            }}>{title}</Typography>
                                <Typography sx={{ marginBottom: "10px" }}>{text1}</Typography>
                                <Typography sx={{ marginBottom: "10px" }}>{text2}</Typography>
                                <Typography sx={{ marginBottom: "10px" }}>{text3}</Typography>
                                <Typography sx={{ marginBottom: "10px" }}>{text4}</Typography>
                            </>}

                    </Box>
                    <Box sx={{
                        height: "100%",
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
                                <Typography variant={"subtitle2"}>{text5}</Typography> :
                                <Typography>{text5}</Typography>
                            : <Typography variant={"h6"}>{text5}</Typography>}

                        {width < 390 ? <Button
                                variant="contained"
                                size="small"
                                component={Link}
                                to="/contact"
                                sx={{ textAlign: "center", marginTop: "10px" }}
                            >
                                Võta meiega ühendust
                            </Button> :
                            <Button
                                variant="contained"
                                size="medium"
                                component={Link}
                                to="/contact"
                                sx={{ textAlign: "center", marginTop: "20px" }}
                            >
                                Võta meiega ühendust
                            </Button>}

                    </Box>
                </Box>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default InfoCenter;
