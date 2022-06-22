import { Box, Typography } from "@mui/material";
import { CalendarEvent } from "./CalendarEvent";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { format } from "date-fns";

interface EventDisplayProps {
    event: CalendarEvent,
    id?: boolean
}

/*const tempEvent: CalendarEvent = {
    projects: ["1", "2", "3"],
}*/

const EventDisplay = ({ event, id }: EventDisplayProps) => {

    const date = new Date(event.start * 1000);
    const date2 = new Date(event.end * 1000);

    const dayOfEvent = format(date, "dd.MM");
    const startOfEvent = format(date, "HH");
    const endOfEvent = format(date2, "HH");

    id = true;

    return (
        <Box sx={{
            borderLeft: "5px solid " + event.color,
            backgroundColor: "whitesmoke",
            padding: "15px",
            marginBottom: "20px"
        }}>
            <Typography variant="h6">{event.title}</Typography>

            {id &&
                <Typography variant="subtitle2" sx={{color: "#bbbbbb"}}>{"ID: " + event.id}</Typography>
            }

            <Box sx={{ color: "#818181", display: "flex", lineHeight: "20px", gap: "5px", margin: "10px 0" }}>
                <CalendarTodayIcon sx={{ fontSize: "20px" }}/>
                {dayOfEvent}
                <AccessTimeIcon sx={{ fontSize: "20px", marginLeft: "20px" }}/>
                { startOfEvent && endOfEvent ? startOfEvent + ":00 - " + endOfEvent + ":00" : "00:00 - 00:00" }
            </Box>

            <Box sx={{ color: "#818181", display: "flex", lineHeight: "24px", gap: "5px", margin: "10px 0" }}>
                <PeopleOutlineIcon sx={{ fontSize: "24px" }}/>
                {"Vabu kohti: " + (event.space - event.projects.length)}
            </Box>

            <Typography variant="subtitle2">{event.description}</Typography>
        </Box>
    );
};

export default EventDisplay;
