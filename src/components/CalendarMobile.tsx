import {Box, Tab, Tabs} from "@mui/material";
import CalendarEventComponent, {CalendarEvent} from "./CalendarEvent";
import CalendarActionButtons from "./CalendarActionButtons";
import useWindowDimensions from "../other/useWindowDimensions";
import {useState, SyntheticEvent} from "react";

interface CalendarMobileProps {
    date: Date,
    dates: Date[],
    displayCalendarEvents: (index: number) => void
}

const CalendarMobile = ({dates, displayCalendarEvents}: CalendarMobileProps) => {

    const {width} = useWindowDimensions();

    const tempEvent: CalendarEvent =
        {
            id: "123",
            title: "Title",
            start: 123,
            end: 123,
            space: 5,
            color: "red",
            projects: [],
            description: "description"
        };

    const days = ["E", "T", "K", "N", "R", "L", "P"];

    return (

        <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: "25px"}}>

            {days.map((day, index) =>
                <Box key={index} sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "305px"
                }}>
                    <Box sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        //color: "#999999",
                        width: "40px"
                    }}>{day}, {dates[index].getDate()}</Box>

                    {displayCalendarEvents(index)}

                </Box>
            )}
        </Box>
    );
};

export default CalendarMobile;
