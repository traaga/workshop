import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const NoPage = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | No Page Found";
    return (
        <>
            <NavigationBar />
            <Typography>No Page Found</Typography>
        </>
    );
};

export default NoPage;
