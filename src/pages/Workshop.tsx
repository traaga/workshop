import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
//import CalendarDeprecated from "../components/CalendarDeprecated";
import Calendar from "../components/Calendar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import PriceList from "../components/PriceList";
import WorkshopGallery from "../components/WorkshopGallery";

const Workshop = () => {
    const { titleFull, isDevelopment } = useContext(GlobalStateContext);
    document.title = "Avatud Töökoda | " + titleFull;

    return (
        <>
            <NavigationBar/>
            <ContentContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Typography
                    gutterBottom
                    variant="h5"
                    width="6em"
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

                {isDevelopment ? <Calendar/> : <Typography sx={{ marginTop: "-25px", marginBottom: "50px" }}>Kalender on
                    arendamisel..</Typography>}

                <Typography
                    gutterBottom
                    variant="h5"
                    width="6em"
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

                <Typography
                    gutterBottom
                    variant="h5"
                    width="11em"
                    sx={{
                        marginTop: "2em",
                        marginBottom: "2em",
                        borderBottom: "2px solid #D9D9D9",
                        height: "1.5em",
                        textAlign: "center",
                    }}
                >
                    Töökojas tehtud tööd
                </Typography>

                <WorkshopGallery/>

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Workshop;
