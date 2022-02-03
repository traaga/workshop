import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Contact = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Kontakt";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>
                    Aadress, email jne; Meeskonna kirjeldused(sotsiaalmeedia
                    kaudu); Saada email vorm
                </Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Contact;
