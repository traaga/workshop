import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Settings = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Seaded";
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
