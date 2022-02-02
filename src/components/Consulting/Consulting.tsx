import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Consulting = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Nõustamised";
    return (
        <>
            <NavigationBar />
            <Typography>Nõustamised</Typography>
        </>
    );
};

export default Consulting;
