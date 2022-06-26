import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import {
    query,
    where,
    collection,
    getDocs
} from "firebase/firestore";
import { CalendarEvent } from "./CalendarEvent";
import useFirebase from "../other/useFirebase";
import CircularProgress from "@mui/material/CircularProgress";
import EventDisplay from "./EventDisplay";
import * as React from "react";

interface ViewEventsProps {
    isOpen: boolean;
    closeDialog: () => void;
    eventsIDsToView: string[];
}

const ViewEvents = ({ isOpen, closeDialog, eventsIDsToView }: ViewEventsProps) => {

    const [viewEvents, setViewEvents] = useState<CalendarEvent[]>([]);
    const [loading, setLoading] = useState(false);

    const { width } = useWindowDimensions();
    const { db } = useFirebase();

    const eventsCollectionRef = collection(db, "events");

    const element = document.querySelector("html");
    element?.classList.add("no-scroll");

    const handleClose = () => {
        setLoading(false);
        element?.classList.remove("no-scroll");
        closeDialog();
    };

    const tempEvent: CalendarEvent = {
        id: "Aif7oYDdY1P8nzvb3lHS",
        start: 1655910000,
        end: 1655913600,
        projects: ["1", "2", "3"],
        description: "See on üks mega lahe kirjeldus, mis vastab antud sündmusele.",
        color: "red",
        space: 10,
        title: "Tähtis sündmus"
    }

    useEffect(() => {

        const fetchEvents = async () => {

            setLoading(true);

            const viewEventsQuery = query(eventsCollectionRef, where("__name__", "in", eventsIDsToView));

            const data = await getDocs(viewEventsQuery);

            setViewEvents(data.docs.map((doc) => {
                const params = doc.data();

                const event: CalendarEvent = {
                    id: doc.id,
                    title: params.title,
                    start: params.start,
                    end: params.end,
                    space: params.space,
                    color: params.color,
                    projects: params.projects,
                    description: params.description
                }

                return event;
            }));

            setLoading(false);
        };

        fetchEvents();
    }, []);

    return (
        <Dialog open={isOpen} onClose={handleClose} fullScreen={width < 900} maxWidth={false}>
            <DialogContent sx={{
                padding: width < 500 ? "0" : "20px 50px",
                height: width < 500 ? "100vh" : "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                position: "relative"
            }}>

                {loading &&
                    <Box sx={{
                        position: "absolute",
                        width: "calc(100% - 100px)",
                        height: "calc(100% - 40px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: "0.33",
                        zIndex: "3"
                    }}>
                        <CircularProgress/>
                    </Box>
                }

                <Box sx={{
                    marginTop: "10px",
                    marginBottom: "20px",
                    marginLeft: width < 500 ? "20px" : "0",
                    marginRight: width < 500 ? "30px" : "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>

                    <Typography variant="h5">Sündmused</Typography>

                    {width < 900 &&
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                width: "64px",
                                height: "64px",
                                right: "-20px"
                            }}>
                            <CloseIcon sx={{ width: "40px", height: "40px", color: "#272727" }}/>
                        </IconButton>
                    }
                </Box>

                {viewEvents.map((event) => (
                    <EventDisplay key={event.id} event={event}/>
                ))}

            </DialogContent>
        </Dialog>
    );
};

export default ViewEvents;
