import { Box, Typography } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";
import texts from "../texts.json";

const Goal = () => {
    const { width } = useWindowDimensions();

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "200px",
                marginBottom: "300px",
            }}>
                <Box sx={{
                    border: "6px solid black",
                    borderRight: "hidden",
                    width: "30px",
                    height: width < 715 ? "375px" : "300px",
                }}/>

                {width > 550 ?
                    <Typography variant="h6" sx={{
                        width: width < 715 ? "400px" : "500px",
                        textAlign: "center",
                        fontWeight: "400"
                    }}>
                        {texts.goal}
                    </Typography> :
                    <Typography variant="subtitle1" sx={{
                        width: "275px",
                        textAlign: "center",
                        fontWeight: "400"
                    }}>
                        {texts.goal}
                    </Typography>}


                <Box sx={{
                    border: "5px solid black",
                    borderLeft: "hidden",
                    width: "30px",
                    height: width < 715 ? "375px" : "300px",
                }}/>
            </Box>
        </>
    );
};

export default Goal;
