import { Box } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";
import { format } from "date-fns";

export interface CalendarEventProps {
    id: string,
    start: number,
    end: number,
    projects: string[],
    description: string,
    firstTime?: number,
    firstDay?: number
}

const CalendarEvent = (calendarEvent: CalendarEventProps) => {

    const { width } = useWindowDimensions();
    const date = new Date(calendarEvent.start * 1000);
    const date2 = new Date(calendarEvent.end * 1000);

    const dayOfEvent = parseInt(format(date, "d"));
    const startOfEvent = format(date, "HH");
    const endOfEvent = format(date2, "HH");

    const slotX = calendarEvent.firstDay ? dayOfEvent - calendarEvent.firstDay : -1;
    const slotY = calendarEvent.firstTime ? parseInt(startOfEvent) - calendarEvent.firstTime : -1;

    return (
        <>
            {width < 1020 ?
                <Box sx={{
                    position: "absolute",
                    top: (99 * 2 / 3) * slotY + slotY * 1.8 + 28 + 5,
                    left: 99 * slotX + slotX + 5,
                    width: 99 - 5 * 2 - 3,
                    height: 99 * 2 / 3 - 5 * 2,
                    backgroundColor: "white",
                    borderLeft: "#ff5252 solid 3px",
                    borderRadius: "5px",
                    '&:hover': {
                        backgroundColor: "#eeeeee",
                        cursor: "pointer"
                    },
                }}>
                    <Box sx={{ margin: "4px", marginLeft: "6px", fontSize: "10px" }}>
                        <Box sx={{ color: "#818181", width: "78px", height: "12px" }}>
                            { startOfEvent && endOfEvent ? startOfEvent + ":00 - " + endOfEvent + ":00" : "00:00 - 00:00" }
                        </Box>
                        <Box sx={{width: "78px", height: "24px"}}>
                            { calendarEvent.description ? calendarEvent.description : "no description" }
                        </Box>
                        <Box sx={{
                            width: "78px",
                            height: "12px",
                            fontStyle: "italic",
                            fontSize: "9px",
                            marginTop: "2px"
                        }}>
                            Vabu kohti:
                            { calendarEvent.projects ? " " + (5 - calendarEvent.projects.length) : " -1" }
                        </Box>
                    </Box>
                </Box> :
                <Box sx={{
                    position: "absolute",
                    top: (124 * 2 / 3) * slotY + slotY * 1.8 + 28 + 5,
                    left: 124 * slotX + slotX + 5,
                    width: (124) - 5 * 2 - 3,
                    height: (124) * 2 / 3 - 5 * 2,
                    backgroundColor: "white",
                    borderLeft: "#ff5252 solid 3px",
                    borderRadius: "5px",
                    '&:hover': {
                        backgroundColor: "#eeeeee",
                        cursor: "pointer"
                    },
                }}>
                    <Box sx={{ margin: "5px", fontSize: "12px" }}>

                        <Box sx={{
                            color: "#818181",
                            overflow: "hidden",
                            height: "14px",
                            width: "101px"
                        }}>
                            { startOfEvent && endOfEvent ? startOfEvent + ":00 - " + endOfEvent + ":00" : "00:00 - 00:00" }
                        </Box>

                        <Box sx={{
                            overflow: "hidden",
                            height: "32px",
                            width: "101px"
                        }}>
                            { calendarEvent.description ? calendarEvent.description : "no description" }
                        </Box>

                        <Box sx={{
                            overflow: "hidden",
                            height: "14px",
                            width: "101px",
                            marginTop: "3px",
                            fontStyle: "italic"
                        }}>
                            Vabu kohti:
                            { calendarEvent.projects ? " " + (5 - calendarEvent.projects.length) : " -1" }
                        </Box>

                    </Box>
                </Box>
            }
        </>
    );
};

export default CalendarEvent;
