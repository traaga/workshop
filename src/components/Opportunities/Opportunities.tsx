import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Opportunities = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Võimalused";
    return (
        <>
            <NavigationBar />
            <Typography>Võimalused</Typography>
        </>
    );
};

export default Opportunities;
