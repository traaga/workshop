import { Box } from "@mui/material";
import RandomParagraph from "./RandomParagraph";
import useWindowDimensions from "../other/useWindowDimensions";
import texts from "../texts.json";

const ParagraphTree = () => {
    const { width } = useWindowDimensions();

    const title1 = "Koolitused";
    const title2 = "Nõustamine";
    const title3 = "Töökoda";

    const point = () => {
        return (
            <Box sx={{
                top: "3px",
                left: width < 900 ? "calc(-7vw - 7.5px)" : "calc((100% - 25px) / 2)",
                height: "25px",
                width: "25px",
                position: "absolute",
                background: "black",
                borderRadius: "50%",
            }}/>)
    }

    //const bWidth = width < 1200 ? "calc((100% - 100px) / 2)" : "450px";

    let bWidth = "450px";

    if(width < 1200) {
        if(width < 900) {
            bWidth = "100%";
        } else {
            bWidth = "calc((100% - 100px) / 2)";
        }
    }

    const pWidth = width < 1200 ? "75%" : "1110px";

    return (
        <Box sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: width < 900 ? "left" : "center"
        }}>
            <Box sx={{
                width: pWidth,
                marginBottom: "100px",
                position: "relative",
                marginLeft: width < 900 ? "15vw" : 0,
            }}>
                {point()}
                <RandomParagraph title={title1} text={texts.tree1} boxWidth={bWidth}/>
            </Box>

            <Box sx={{
                width: pWidth,
                display: "flex",
                justifyContent: width < 900 ? "flex-start" : "flex-end",
                marginBottom: "100px",
                position: "relative",
                marginLeft: width < 900 ? "15vw" : 0,
            }}>
                {point()}
                <RandomParagraph title={title2} text={texts.tree2} boxWidth={bWidth}/>
            </Box>

            <Box sx={{
                width: pWidth,
                marginBottom: "100px",
                position: "relative",
                marginLeft: width < 900 ? "15vw" : 0,
            }}>
                {point()}
                <RandomParagraph title={title3} text={texts.tree3} boxWidth={bWidth}/>
            </Box>

            {/* CENTER LINE */}
            <Box sx={{
                top: "-70px",
                left: width < 900 ? "8vw" : "calc((100% - 10px) / 2)",
                height: "100%",
                width: "10px",
                position: "absolute",
                background: "black",
                opacity: 0.67
            }}/>
        </Box>
    );
};

export default ParagraphTree;
