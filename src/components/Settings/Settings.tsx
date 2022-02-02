import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Settings = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Seaded";
    return (
        <>
            <NavigationBar />
            <Typography>Seaded</Typography>
        </>
    );
};

export default Settings;
