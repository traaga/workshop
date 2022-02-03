import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const NoPage = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | No Page Found";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>No Page Found</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default NoPage;
