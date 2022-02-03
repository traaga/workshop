import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Opportunities = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Võimalused";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Võimalused</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Opportunities;
