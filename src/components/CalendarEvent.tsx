import { Box } from "@mui/material";
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
    id?: string,
    start?: number,
    end?: number,
    projects?: string[],
    temp: number,
    temp2: number
}

const CalendarEvent = (calendarEvent: CalendarEventProps) => {

    /*
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
    }*/

    const { width } = useWindowDimensions();

    return (
        <>
            {width < 1020 ?
                <Box sx={{
                    position: "absolute",
                    top: (99 * 2 / 3) * calendarEvent.temp + calendarEvent.temp * 1.8 + 28 + 5,
                    left: 99 * calendarEvent.temp2 + calendarEvent.temp2 + 5,
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
                    <Box sx={{ margin: "4px", fontSize: "10px" }}>
                        <Box sx={{ color: "#818181" }}>08:00 - 09:00</Box>
                        <Box>Mingi väga tähtis tegevus</Box>
                        <Box>Vabu kohti: 3</Box>
                    </Box>
                </Box> :
                <Box sx={{
                    position: "absolute",
                    top: (124 * 2 / 3) * calendarEvent.temp + calendarEvent.temp * 1.8 + 28 + 5,
                    left: 124 * calendarEvent.temp2 + calendarEvent.temp2 + 5,
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
                        }}>08:00 - 09:00</Box>

                        <Box sx={{
                            overflow: "hidden",
                            height: "28px",
                            width: "101px"
                        }}>Mingi väga tähtis tegevus</Box>

                        <Box sx={{
                            overflow: "hidden",
                            height: "14px",
                            width: "101px"
                        }}>Vabu kohti: 5</Box>

                    </Box>
                </Box>
            }
        </>
    );
};

export default CalendarEvent;
