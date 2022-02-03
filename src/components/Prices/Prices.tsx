import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Prices = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Hinnakiri";
    return (
        <>
            <NavigationBar />
            <ContentContainer>
                <Typography>Hinnakiri</Typography>
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Prices;
