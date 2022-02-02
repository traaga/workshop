import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Courses = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Koolitused";
    return (
        <>
            <NavigationBar />
            <Typography>Koolitused</Typography>
        </>
    );
};

export default Courses;
