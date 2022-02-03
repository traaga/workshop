import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Rules = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Kodukord";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Kodukord</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Rules;
