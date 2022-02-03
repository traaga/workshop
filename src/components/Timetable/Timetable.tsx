import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Timetable = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Tunniplaan";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Tunniplaan</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Timetable;
