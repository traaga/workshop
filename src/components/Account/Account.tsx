import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import { Typography, Avatar } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Account = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Minu konto";
    return (
        <>
            <NavigationBar />
            <Typography>Minu konto</Typography>
            <Avatar src="images/profile.jpg" sx={{ width: 320, height: 320 }} />
        </>
    );
};

export default Account;
