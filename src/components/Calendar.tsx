import { Box, Button, Dialog } from "@mui/material";
import { useEffect, useState } from "react";
import WeekPicker from "./WeekPicker";
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { db } from "../other/Firebase";
import { collection, getDocs } from "firebase/firestore";
import CalendarEvent, { CalendarEventProps } from "./CalendarEvent";
import useWindowDimensions from "../other/useWindowDimensions";

const Calendar = () => {

    const [calendarEvents, setCalendarEvents] = useState<CalendarEventProps[]>([]);
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
    const [newEventOpen, setNewEventOpen] = useState<boolean>(false);
    const { width } = useWindowDimensions();

    const eventsCollectionRef = collection(db, "events");

    const days2 = [1, 2, 3, 4, 5, 6, 7];
    const days = ["E 18.04", "T 19.04", "K 20", "N 21", "R", "L", "P"];
    const times_str_list = ["08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

    const loading = calendarEvents.length === 0 && false;

    let calendarSlotSize = 125;

    if (width < 1020) {
        if (width < 820) {
            calendarSlotSize = 100; // 75
        } else {
            calendarSlotSize = 100;
        }
    }

    const lineColor = "#dbdbdb";

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

        //fetchEvents();
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

    const timeMatrix = (times: number, slotWidth: number) => {

        const timesList: number[] = [];
        for (let i = 0; i < times; i++) {
            timesList.push(i);
        }

        return (
            <Box>
                {timesList.map((time) => (
                    <Box key={time} sx={{ position: "relative" }}>
                        <Box sx={{ position: "absolute", top: "-10px", left: "-50px", color: "#adadad" }}>
                            08:00
                        </Box>
                        <Box sx={{
                            height: slotWidth * 2 / 3,
                            width: "10px",
                            borderTop: lineColor + " solid 1px"
                        }}/>
                    </Box>
                ))}
            </Box>
        )
    }

    const eventMatrix = (rows: number, columns: number, slotWidth: number) => {

        const rowsList: number[] = [];
        for (let i = 0; i < rows; i++) {
            rowsList.push(i);
        }

        const columnsList: number[] = [];
        for (let i = 0; i < columns; i++) {
            columnsList.push(i);
        }

        return (
            <Box
                sx={{
                    display: "flex",
                    borderBottom: lineColor + " solid 1px",
                    borderRight: lineColor + " solid 1px",
                    maxWidth: "877px",
                    overflowX: "scroll"
                }}>
                {columnsList.map((column) => (
                    <Box key={column} sx={{ width: slotWidth }} width={slotWidth}>
                        {rowsList.map((row) => (
                            <Box key={row} sx={{
                                height: slotWidth * 2 / 3,
                                borderTop: lineColor + " solid 1px",
                                borderLeft: lineColor + " solid 1px"
                            }}/>
                        ))}
                    </Box>
                ))}
            </Box>
        )
    }

    return (
        <>
            <Box sx={{ marginBottom: "50px", marginLeft: "45px" }}>
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
                    backgroundColor: "whitesmoke",
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

                    {/*<Box sx={{display: "flex", backgroundColor: "#efefef"}}>
                        <Box sx={{ width: "75px", height: width < 1225 ? "40px" : "50px" }}/>
                        {days.map((day) => (
                            <Box sx={{
                                width: width < 1225 ? "90px" : "125.5px",
                                borderLeft: "whitesmoke solid 1px",
                                textAlign: "center"
                            }}>{day}</Box>
                        ))}
                    </Box>*/}


                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}>
                        {timeMatrix(8, calendarSlotSize)}
                        <Box sx={{ position: "relative" }}>
                            <Box sx={{
                                position: "absolute",
                                top: 170 + 5,
                                left: 376 + 5,
                                width: (124 - 0) - 5 * 2 - 3,
                                height: (124 - 0) * 2 / 3 - 5 * 2,
                                backgroundColor: "white",
                                borderLeft: "#ff5252 solid 3px",
                                borderRadius: "5px",
                                '&:hover': {
                                    backgroundColor: "#eeeeee",
                                    cursor: "pointer"
                                },
                            }}>
                                <Box sx={{ margin: "5px", fontSize: "12px" }}>
                                    <Box sx={{ color: "#818181" }}>08:00 - 09:00</Box>
                                    <Box>Mingi väga tähtis tegevus</Box>
                                    <Box>Vabu kohti: 3</Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                position: "absolute",
                                top: 136 + 5,
                                left: 201 + 5,
                                width: (124 - 25) - 5 * 2 - 3,
                                height: (124 - 25) * 2 / 3 - 5 * 2,
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
                            </Box>
                            {eventMatrix(8, 7, calendarSlotSize)}
                        </Box>
                    </Box>

                    {/*{times.map((time) => (
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
                    ))}*/}
                </Box>
            </Box>
        </>
    );
};

export default Calendar;
