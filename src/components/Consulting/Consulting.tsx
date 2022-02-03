import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Consulting = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Nõustamised";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Nõustamised</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Consulting;
