import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";

const InfoCenter = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Infokeskus";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Koolitused</Typography>
                <Typography>Nõustamised</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default InfoCenter;
