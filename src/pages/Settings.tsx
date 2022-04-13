import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";

const Settings = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "Seaded + | " + titleFull;

    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Seaded</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Settings;
