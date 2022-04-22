import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";

const NoPage = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "No Page Found | " + titleFull;

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
