import { Box, Button } from "@mui/material";
import WeekPicker from "./WeekPicker";
import { useState } from "react";
import useWindowDimensions from "../other/useWindowDimensions";

interface CalendarActionButtonsProps {
    date: Date,
    setDate: (date: Date) => void;
}

const CalendarActionButtons = ({date, setDate}: CalendarActionButtonsProps) => {
    const { width } = useWindowDimensions();

    const handleToday = () => {
        setDate(new Date());
    }

    return (
        <Box sx={{
            display: "flex",
            marginBottom: width <= 800 ? "50px" : "100px",
            justifyContent: "space-between",
            fontWeight: "500",
            color: "#3e3e3e",
            flexDirection: width < 900 ? "column" : "row",
            alignItems: "center"
        }}>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <Button onClick={handleToday} sx={{ height: "100%" }}>Täna</Button>
                <Box sx={{ border: "1px solid #cfcfcf", height: "30px", margin: "0px 5px" }}/>
                <WeekPicker value={date} setValue={setDate}/>
            </Box>

            {/*<Button sx={{ minWidth: "40px", color: "#b3b3b3" }}>
                <HelpIcon/>
            </Button>*/}


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
