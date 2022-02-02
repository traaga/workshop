import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Contact = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Kontakt";
    return (
        <>
            <NavigationBar />
            <Typography>Aadress, email jne; Meeskonna kirjeldused(sotsiaalmeedia kaudu); Saada email vorm</Typography>
        </>
    );
};

export default Contact;
