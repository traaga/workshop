import {Box, Tab, Tabs} from "@mui/material";
import CalendarEventComponent, {CalendarEvent} from "./CalendarEvent";
import CalendarActionButtons from "./CalendarActionButtons";
import useWindowDimensions from "../other/useWindowDimensions";
import {useState, SyntheticEvent} from "react";

const CalendarMobile = () => {

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

    const dates = ["26", "27", "28", "29", "30", "1", "2"];
    const days = ["E", "T", "K", "N", "R", "L", "P"];

    return (

        <Box sx={{display: "flex", alignItems: "center", flexDirection: "column", gap: "25px"}}>

            {days.map((day, index) =>
                <Box key={index} sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}>
                    <Box sx={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#999999",
                        width: "40px"
                    }}>{day}, {dates[index]}</Box>

                    <CalendarEventComponent event={tempEvent} firstTime={0}
                                            firstDay={0}
                                            selectedEventsIDs={[]}
                                            setSelectedEventsIDs={() => console.log()}/>
                    <CalendarEventComponent event={tempEvent} firstTime={0}
                                            firstDay={0}
                                            selectedEventsIDs={[]}
                                            setSelectedEventsIDs={() => console.log()}/>
                </Box>
            )}
        </Box>
    );
};

export default CalendarMobile;
