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
import CalendarEventComponent, { CalendarEvent } from "./CalendarEvent";
import useFirebase from "../other/useFirebase";
import CircularProgress from "@mui/material/CircularProgress";
import EventDisplay from "./EventDisplay";
import { format } from "date-fns";

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

    /*
    const date = new Date(props.event.start * 1000);
    const date2 = new Date(props.event.end * 1000);

    const dayOfEvent = parseInt(format(date, "d"));
    const startOfEvent = format(date, "HH");
    const endOfEvent = format(date2, "HH");
    */

    const handleClose = () => {
        setLoading(false);
        closeDialog();
    };

    const element = document.querySelector("html");

    if(isOpen) {
        element?.classList.add("no-scroll");
    } else {
        element?.classList.remove("no-scroll");
    }

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

                console.log(event)

                return event;
            }));

            setLoading(false);
        };

        fetchEvents();
    }, []);

    return (
        <Dialog open={isOpen} onClose={handleClose} fullScreen={width < 500}>
            <DialogContent sx={{
                padding: width < 500 ? "50px calc(20% / 2)" : "20px 50px",
                width: width < 500 ? "80%" : "350px",
                height: width < 500 ? "100vh" : "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                position: "relative"
            }}>

                {/*<Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "24px",
                        paddingBottom: "32px",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 64,
                            width: 136,
                        }}
                        src="images/logo2-3.png"
                    />
                </Box>*/}

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

                {viewEvents.map((event) => (
                    <EventDisplay key={event.id} event={event}/>
                ))}

                {/*<EventDisplay key={"123"} event={tempEvent}/>
                <EventDisplay key={"123"} event={tempEvent}/>*/}

                {width < 500 &&
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            width: "64px",
                            height: "64px",
                            position: "absolute",
                            right: "5vw",
                            top: "5vw"
                        }}>
                        <CloseIcon sx={{ width: "40px", height: "40px", color: "#272727" }}/>
                    </IconButton>
                }

            </DialogContent>
        </Dialog>
    );
};

export default ViewEvents;
