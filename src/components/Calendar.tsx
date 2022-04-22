import { Box, Button, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import WeekPicker from "./WeekPicker";
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { db } from "../other/Firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import CalendarEvent, { CalendarEventProps } from "./CalendarEvent";
import useWindowDimensions from "../other/useWindowDimensions";

const Calendar = () => {

    const [calendarEvents, setCalendarEvents] = useState<CalendarEventProps[]>([]);
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
    const [newEventOpen, setNewEventOpen] = useState<boolean>(false);
    const { width } = useWindowDimensions();

    const eventsCollectionRef = collection(db, "events");

    const days = [1, 2, 3, 4, 5, 6, 7];
    const times = ["08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

    const loading = calendarEvents.length === 0 || false;

    useEffect(() => {

        const fetchEvents = async () => {
            const data = await getDocs(eventsCollectionRef);

            setCalendarEvents(data.docs.map((doc) => {
                const params = doc.data();

                /*const event: CalendarEventProps = {
                    id: doc.id,
                    description: params.description,
                    start: params.start,
                    end: params.end,
                    user: params.user,
                    tools: params.tools
                }*/

                const event: CalendarEventProps = {
                    id: doc.id,
                    start: params.start.seconds,
                    end: params.end.seconds,
                    projects: params.projects
                }

                return event;
            }));
        };

        fetchEvents();
    }, []);

    const handleOpen = () => {
        setNewEventOpen(true);
    }

    const handleClose = () => {
        setNewEventOpen(false);
    }

    const handleToday = () => {
        setChosenDate(new Date());
    }

    return (
        <>
            <Box sx={{ marginBottom: "50px" }}>
                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                    <Button variant="outlined" onClick={handleToday}>Täna</Button>
                    <WeekPicker value={chosenDate} setValue={setChosenDate}/>
                    <IconButton sx={{ width: "56px" }} onClick={handleOpen}>
                        <FontAwesomeIcon icon={faCirclePlus} color={"lightblue"} fontSize={"1.25em"}/>
                    </IconButton>
                </Box>
                <Dialog onClose={handleClose} open={newEventOpen}>
                    hi
                </Dialog>
                <Box sx={{
                    backgroundColor: "white",
                    borderRight: "whitesmoke solid 1px",
                    borderLeft: "whitesmoke solid 1px",
                    borderBottom: "whitesmoke solid 1px",
                    position: "relative",
                    userSelect: "none",
                }}>
                    {loading &&
                        <Box sx={{
                            backgroundColor: "whitesmoke",
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: "0.33",
                            zIndex: "3"
                        }}>
                            <CircularProgress/>
                        </Box>
                    }

                    {calendarEvents.map((event) => (
                        <CalendarEvent key={event.id} {...event}/>
                    ))}

                    {times.map((time) => (
                        <Box key={time} sx={{ height: width < 1225 ? "40px" : "50px", display: "flex", borderTop: "whitesmoke solid 1px", }}>
                            <Box sx={{
                                backgroundColor: "#efefef",
                                width: "75px",
                                color: "#7c7c7c",
                                textAlign: "center"
                            }}>
                                {time}
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                {
                                    days.map((day) => (
                                        <Box
                                            key={day}
                                            sx={{
                                                width: width < 1225 ? "90px" : "125.5px",
                                                borderLeft: "whitesmoke solid 1px",
                                            }}
                                        />
                                    ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Calendar;
