import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { CalendarEvent } from "./CalendarEvent";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { format } from "date-fns";
import useWindowDimensions from "../other/useWindowDimensions";
import * as React from "react";

interface EventDisplayProps {
    event: CalendarEvent,
    id?: boolean
}

const EventDisplay = ({ event, id }: EventDisplayProps) => {

    const { width } = useWindowDimensions();

    const date = new Date(event.start * 1000);
    const date2 = new Date(event.end * 1000);

    const dayOfEvent = format(date, "dd.MM");
    const startOfEvent = format(date, "HH");
    const endOfEvent = format(date2, "HH");

    id = true;

    return (
        <Box sx={{
            borderLeft: event.color ? "5px solid " + event.color : "5px solid whitesmoke",
            backgroundColor: "whitesmoke",
            padding: "15px",
            marginBottom: "20px",
            width: width < 900 ? "calc(100% - 35px)" : "550px",
        }}>
            <Typography variant="h6">{event.title ? event.title : "no title"}</Typography>

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

            <Typography variant="subtitle1">{event.description}</Typography>

            {event.projects.length > 0 &&
                <Box sx={{marginTop: "10px"}}>
                    {event.projects.map((projectId, index) =>
                        <Accordion key={projectId} elevation={1}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ display: "flex", alignItems: "center"}}
                            >
                                <Typography sx={{width: "33%"}}>{"Projekt " + (index + 1)}</Typography>
                                <Typography variant="subtitle2" sx={{color: "#bbbbbb", lineHeight: "1.5"}}>{"ID: " + projectId}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="subtitle1">Vastutav: Madis Abel</Typography>
                                <Typography variant="subtitle1">{event.description}</Typography>

                                <Box
                                    sx={{
                                        marginTop: "16px",
                                        height: "300px",
                                        width: "100%",
                                        objectFit: "cover",
                                        cursor: "pointer"
                                    }}
                                    component="img"
                                    src="images/profile.jpg"
                                >
                                </Box>

                            </AccordionDetails>
                        </Accordion>
                    )}
                </Box>
            }

        </Box>
    );
};

export default EventDisplay;
