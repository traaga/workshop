import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";

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
