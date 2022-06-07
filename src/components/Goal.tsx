import { Box, Typography } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";

const Goal = () => {
    const { width } = useWindowDimensions();

    const goal: string = "Fellini töökoja eesmärk on pakkuda Viljandi inimestele lihtsalt võimalust, " +
        "kus oma projektidega tegeleda, kui omal puuduvad selleks ruum ja/või vahendid. Alati saab " +
        "ka abi küsida meie kohapeal oleva(te) meistri(te) käest.";

    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "200px",
                marginBottom: "300px"
            }}>
                <Box sx={{
                    border: "6px solid black",
                    borderRight: "hidden",
                    width: "30px",
                    height: width < 715 ? "250px" : "200px",
                }}/>

                {width > 500 ?
                    <Typography variant="h6" sx={{
                        width: width < 715 ? "350px" : "500px",
                        textAlign: "center",
                    }}>
                        {goal}
                    </Typography> :
                    <Typography variant="subtitle1" sx={{
                        width: "275px",
                        textAlign: "center",
                    }}>
                        {goal}
                    </Typography>}


                <Box sx={{
                    border: "5px solid black",
                    borderLeft: "hidden",
                    width: "30px",
                    height: width < 715 ? "250px" : "200px",
                }}/>
            </Box>
        </>
    );
};

export default Goal;
