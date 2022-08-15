import { Box, Typography } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";

interface RandomParagraphProps {
    title: string;
    text: string;
    boxWidth?: string;
}

const RandomParagraph = ({ title, text, boxWidth }: RandomParagraphProps) => {
    const { width } = useWindowDimensions();

    return (
        <>
            <Box sx={{ width: boxWidth ? boxWidth : "450px" }}>
                <Typography variant="h5" sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    marginBottom: "15px"
                }}>{title}</Typography>
                <Typography variant="h6" sx={{ textAlign: width < 1200 ? "left" : "justify", fontWeight: "400" }}>{text}</Typography>
            </Box>
        </>
    );
};

export default RandomParagraph;
