import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Prices = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Hinnakiri";
    return (
        <>
            <NavigationBar />
            <Typography>Hinnakiri</Typography>
        </>
    );
};

export default Prices;
