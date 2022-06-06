import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import WeekPicker from "../components/WeekPicker";
import Calendar from "../components/Calendar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import PriceList from "../components/PriceList";

const Workshop = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "Avatud Töökoda | " + titleFull;

    return (
        <>
            <NavigationBar/>
            <ContentContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography>Kalender</Typography>
                <Typography>Töölaua ja tööriistarendi hinnakiri</Typography>
                <Typography>Kodukord ning ohutusest</Typography>
                <Typography sx={{ marginBottom: "100px" }}>Lisaks pakume: Hoiu võimalus, Materjali hankimine,
                    Käsitööriistade rent</Typography>

                <Typography
                    gutterBottom
                    variant="h5"
                    //width={width > 696 ? "8em" : "auto"}
                    width="8em"
                    sx={{
                        fontSize: "1.5em",
                        marginTop: "2em",
                        marginBottom: "2em",
                        borderBottom: "2px solid #D9D9D9",
                        height: "1.5em",
                        textAlign: "center",
                    }}
                >
                    Kalender
                </Typography>

                <Calendar/>

                <Typography
                    gutterBottom
                    variant="h5"
                    //width={width > 696 ? "8em" : "auto"}
                    width="8em"
                    sx={{
                        marginTop: "2em",
                        marginBottom: "2em",
                        borderBottom: "2px solid #D9D9D9",
                        height: "1.5em",
                        textAlign: "center",
                    }}
                >
                    Hinnakiri
                </Typography>

                <PriceList/>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Workshop;
