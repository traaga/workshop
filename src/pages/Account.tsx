import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Typography, Avatar } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";

const Account = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "Konto | " + titleFull;

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
