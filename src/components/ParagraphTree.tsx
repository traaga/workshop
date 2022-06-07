import { Box } from "@mui/material";
import RandomParagraph from "./RandomParagraph";
import useWindowDimensions from "../other/useWindowDimensions";

const ParagraphTree = () => {
    const { width } = useWindowDimensions();

    // Paragrah 1
    const title1 = "Koolitused";
    const text1 = "Korraldame ka pikemaid koolitusi spetsiifilistematel ja suurematel teemadel. Nende toimumistest anname pikalt ette teada oma sotsiaalmeedia kontodel ja uudiskirjas.";

    // Paragrah 2
    const title2 = "Nõustamine";
    const text2 = "Pakume ka maja või korteri elanikele eraldiseisvat nõustamis teenust. Kui on hoonel probleemi, mis nõuab suuremat tähelepanu ja tõenäoliselt remonti, siis saame tulla nõustama ning võimalusel töö ka ise ära teha. Täpsemat infot selle kohta leiab infokeskuse alammenüüst.";

    // Paragraph 3
    const title3 = "Töökoda";
    const text3 = "Nii töökoja kasutamise, kui ka koolitusel osalemiseks on vaja eelnevalt aeg broneerida, siis teame end ka valmis seada. Broneerida saab avatud töökoja alammenüü alt, seal on kõik vabad ajad kirjas koos hinnakirjaga.";


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
                <RandomParagraph title={title1} text={text1} boxWidth={bWidth}/>
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
                <RandomParagraph title={title2} text={text2} boxWidth={bWidth}/>
            </Box>

            <Box sx={{
                width: pWidth,
                marginBottom: "100px",
                position: "relative",
                marginLeft: width < 900 ? "15vw" : 0,
            }}>
                {point()}
                <RandomParagraph title={title3} text={text3} boxWidth={bWidth}/>
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
