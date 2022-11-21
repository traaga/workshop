import {Box, Typography} from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";
import texts from "../texts.json";

const CourseGoal = () => {
    const {width} = useWindowDimensions();

    const small = width < 1000;

    return (
        <>
            <Box sx={{
                display: "flex",
                //marginTop: small ? "50px" : "100px",
                marginTop: "100px",
                marginBottom: "100px",
                flexDirection: small ? "column" : "row"
            }}>
                <Box component={"img"} src={"images/F63A4710F63A4710.jpg"} sx={{
                    width: small ? "calc(50vw + 70px)" : "300px",
                    minWidth: "320px",
                    height: small ? "200px" : "auto",
                    objectFit: small ? "cover" : "inherit"
                }}/>
                <Box sx={{
                    width: small ? "50vw" : "500px",
                    minWidth: "250px",
                    padding: "35px",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}>
                    <Typography variant={"h6"}>{texts.courseHeadline}</Typography>
                    <Typography>{texts.courseGoal}</Typography>
                </Box>
            </Box>
        </>
    );
};

export default CourseGoal;
