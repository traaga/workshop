import { Box, Typography } from "@mui/material";

const Goal = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "200px 0" }}>
                <Box sx={{
                    border: "6px solid black",
                    borderRight: "hidden",
                    width: "30px",
                    height: "200px"
                }}/>
                <Typography variant="h6" sx={{ width: "500px", textAlign: "center" }}>Fellini töökoja eesmärk on pakkuda Viljandi inimestele
                    lihtsalt võimalust, kus oma projektidega tegeleda, kui omal puuduvad selleks ruum ja/või vahendid.
                    Alati saab ka abi küsida meie kohapeal oleva(te) meistri(te) käest.</Typography>
                <Box sx={{
                    border: "5px solid black",
                    borderLeft: "hidden",
                    width: "30px",
                    height: "200px"
                }}/>
            </Box>
        </>
    );
};

export default Goal;
