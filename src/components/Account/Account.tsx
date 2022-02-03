import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography, Avatar } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Account = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Minu konto";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Minu konto</Typography>
                <Avatar
                    src="images/profile.jpg"
                    sx={{ width: 320, height: 320 }}
                />
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Account;
