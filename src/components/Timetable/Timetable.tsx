import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Timetable = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Tunniplaan";
    return (
        <>
            <NavigationBar />
            <Typography>Tunniplaan</Typography>
        </>
    );
};

export default Timetable;
