import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Courses = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Koolitused";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
            <Typography>Koolitused</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Courses;
