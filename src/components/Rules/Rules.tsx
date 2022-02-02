import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Rules = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Kodukord";
    return (
        <>
            <NavigationBar />
            <Typography>Kodukord</Typography>
        </>
    );
};

export default Rules;
