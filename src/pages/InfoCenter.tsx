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
                    top: "15%",
                    left: width < 1200 ? "calc((100% - 600px) / 2)" : "calc((100% - 50%) / 2)",
                    width: width < 1200 ? "600px" : "50%",
                    height: "50%",
                    position: "absolute",
                    display: "flex",
                    maxWidth: "800px",
                }}>
                    <Box sx={{
                        height: "100%",
                        width: "70%",
                        backgroundColor: "white",
                        opacity: "0.9",
                        padding: "15px",
                    }}>
                        <Typography variant="h5" sx={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            marginBottom: "15px",
                        }}>{title}</Typography>
                        <Typography sx={{marginBottom: "10px"}}>{text1}</Typography>
                        <Typography sx={{marginBottom: "10px"}}>{text2}</Typography>
                        <Typography sx={{marginBottom: "10px"}}>{text3}</Typography>
                        <Typography sx={{marginBottom: "10px"}}>{text4}</Typography>
                    </Box>
                    <Box sx={{
                        height: "100%",
                        width: "30%",
                        backgroundColor: "whitesmoke",
                        opacity: "0.9",
                        padding: "15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}>
                        <Typography variant={"h6"}>{text5}</Typography>
                        <Button
                            variant="contained"
                            size="medium"
                            component={Link}
                            to="/contact"
                        >
                            Võta meiega ühendust
                        </Button>
                    </Box>
                </Box>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default InfoCenter;
