import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { CalendarEvent } from "./CalendarEvent";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format } from "date-fns";
import useWindowDimensions from "../other/useWindowDimensions";
import ProjectDisplay from "./ProjectDisplay";
import { useContext } from "react";
import { GlobalStateContext } from "../other/GlobalStateContext";

interface EventDisplayProps {
    event: CalendarEvent,
    id?: boolean
}

const EventDisplay = ({ event, id }: EventDisplayProps) => {

    const { width } = useWindowDimensions();
    const { user } = useContext(GlobalStateContext);

    const date = new Date(event.start * 1000);
    const date2 = new Date(event.end * 1000);

    const dayOfEvent = format(date, "dd.MM");
    const startOfEvent = format(date, "HH");
    const endOfEvent = format(date2, "HH");

    return (
        <Box sx={{
            borderLeft: event.color ? "5px solid " + event.color : "5px solid whitesmoke",
            backgroundColor: "whitesmoke",
            padding: "15px",
            marginBottom: "20px",
            width: width < 900 ? "calc(100% - 35px)" : "550px",
        }}>
            <Typography variant="h6">{event.title ? event.title : "no title"}</Typography>

            {user?.role === "admin" &&
                <Typography variant="subtitle2" sx={{ color: "#bbbbbb" }}>{"ID: " + event.id}</Typography>
            }

            <Box sx={{ color: "#818181", display: "flex", lineHeight: "20px", gap: "5px", margin: "10px 0" }}>
                <CalendarTodayIcon sx={{ fontSize: "20px" }}/>
                {dayOfEvent}
                <AccessTimeIcon sx={{ fontSize: "20px", marginLeft: "20px" }}/>
                {startOfEvent && endOfEvent ? startOfEvent + ":00 - " + endOfEvent + ":00" : "00:00 - 00:00"}
            </Box>

            <Box sx={{ color: "#818181", display: "flex", lineHeight: "24px", gap: "5px", margin: "10px 0" }}>
                <PeopleOutlineIcon sx={{ fontSize: "24px" }}/>
                {"Vabu kohti: " + (event.space - event.projects.length)}
            </Box>

            <Typography variant="subtitle1">{event.description}</Typography>

            {event.projects.length > 0 && user?.role === "admin" &&
                <Box sx={{ marginTop: "10px" }}>
                    {event.projects.map((projectId, index) =>
                        <Accordion key={projectId} elevation={1}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>

                                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                                    <Typography sx={{ width: "33%" }}>{"Projekt " + (index + 1)}</Typography>
                                    <Typography variant="subtitle2" sx={{
                                        color: "#bbbbbb",
                                        lineHeight: "1.5",
                                        userSelect: "text"
                                    }}>
                                        {"ID: " + projectId}
                                    </Typography>
                                </Box>

                            </AccordionSummary>
                            <AccordionDetails>

                                <ProjectDisplay id={projectId}/>

                            </AccordionDetails>
                        </Accordion>
                    )}
                </Box>
            }

        </Box>
    );
};

export default EventDisplay;
