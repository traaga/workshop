import { Box, Button, IconButton, Theme } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import HelpIcon from '@mui/icons-material/Help';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WeekPicker from "./WeekPicker";
import { useState } from "react";
import useWindowDimensions from "../other/useWindowDimensions";

const CalendarActionButtons = () => {
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date("July 20, 2022 15:30:00"));
    const { width } = useWindowDimensions();

    return (
        <Box sx={{
            display: "flex",
            marginBottom: "100px",
            justifyContent: "space-between",
            fontWeight: "500",
            color: "#3e3e3e",
            flexDirection: width < 900 ? "column" : "row",
            alignItems: "center"
        }}>
            {/*<Box sx={{ display: "flex", alignItems: "center", border: "2px solid #dddddd", borderRadius: "10px" }}>
                <Box sx={{ padding: "10px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>Täna</Box>
                <Box sx={{ border: "1px solid #cfcfcf", height: "25px" }}/>
                <ArrowBackIosNewIcon sx={{padding: "7px 10px"}}/>
                <Box sx={{ padding: "10px 0px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                    26.04 - 02.04
                </Box>
                <ArrowForwardIosIcon sx={{padding: "7px 10px"}}/>
            </Box>*/}

            <Box sx={{display: "flex", alignItems: "center"}}>
                <Button sx={{ height: "100%" }}>Täna</Button>
                <Box sx={{ border: "1px solid #cfcfcf", height: "30px", margin: "0px 5px" }}/>
                <WeekPicker value={chosenDate} setValue={setChosenDate}/>
            </Box>

            <Button sx={{ minWidth: "40px", color: "#b3b3b3" }}>
                <HelpIcon/>
            </Button>


            {/*<Box sx={{ display: "flex", alignItems: "center", border: "2px solid #dddddd", borderRadius: "10px" }}>
                <Box sx={{
                    padding: "10px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                }}>
                    Tühista valik (3)
                </Box>
                <Box sx={{ border: "1px solid #cfcfcf", height: "25px" }}/>
                <Box sx={{ padding: "10px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>Vaata</Box>
            </Box>*/}

            {/*<Box sx={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #dddddd",
                borderRadius: "10px",
                padding: "10px"
            }}>
                Registreerimiseks vali üks või mitu sündmust
            </Box>*/}
        </Box>
    );
};

export default CalendarActionButtons;
