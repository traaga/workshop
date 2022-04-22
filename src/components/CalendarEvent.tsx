import { Box } from "@mui/material";
import { format } from "date-fns";
import useWindowDimensions from "../other/useWindowDimensions";

/*export interface CalendarEventProps {
    id: string,
    description: string,
    start: number,
    end: number,
    user: string,
    tools: string[]
}*/

export interface CalendarEventProps {
    id: string,
    start: number,
    end: number,
    projects: string[]
}

const CalendarEvent = (calendarEvent: CalendarEventProps) => {

    const { width } = useWindowDimensions();
    const slotWidth = width < 1225 ? 90 : 125.5;
    const slotHeight = width < 1225 ? 90 : 72;

    const timestampToDay = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDay();

        if (day === 0)
            return 7;

        return day;
    }

    const calcLeft = (start: number) => {
        const day = timestampToDay(start);
        return 75 + day + slotWidth * (day - 1);
    }

    const calcHeight = (start: number, end: number) => {
        return (end - start) / slotHeight + (end - start) / 3600 - 1;
    }

    const calcTop = (start: number) => {
        const openTime = new Date(start * 1000);

        openTime.setHours(8);
        openTime.setMinutes(0);
        openTime.setMilliseconds(0);

        return calcHeight(Math.round(openTime.getTime() / 1000), start) + 2;
    }

    return (
        <Box key={calendarEvent.id} sx={{
            color: "#202020",
            backgroundColor: "lightblue",
            position: "absolute",
            width: slotWidth + "px",
            height: calcHeight(calendarEvent.start, calendarEvent.end) + "px",
            top: calcTop(calendarEvent.start) + "px",
            left: calcLeft(calendarEvent.start) + "px",
            overflowY: "hidden",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            borderRadius: "5px",
            '&:hover': {
                background: "#bdefff",
                cursor: "pointer"
            },
        }}>
            <Box>
                {format(new Date(calendarEvent.start * 1000), "HH:mm")}
            </Box>
            <Box>
                {calendarEvent.projects.length + "/5"}
            </Box>
        </Box>
    );
};

export default CalendarEvent;
