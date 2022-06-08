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
import startOfWeek from "date-fns/startOfWeek";
import etLocale from "date-fns/locale/et";
import endOfWeek from "date-fns/endOfWeek";
import { format } from 'date-fns';

const Calendar = () => {

    const [calendarEvents, setCalendarEvents] = useState<CalendarEventProps[]>([]);
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
    const [newEventOpen, setNewEventOpen] = useState<boolean>(false);
    const { width } = useWindowDimensions();

    const eventsCollectionRef = collection(db, "events");

    const weekStart = startOfWeek(chosenDate ? chosenDate : new Date(), {
        locale: etLocale,
        weekStartsOn: 1
    });

    const weekEnd = endOfWeek(chosenDate ? chosenDate : new Date(), {
        locale: etLocale,
        weekStartsOn: 1
    });

    const getDatesInRange = (startDate: Date, endDate: Date) => {
        const date = new Date(startDate.getTime());
        const dates = [];

        while (date <= endDate) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        return dates;
    }

    const days = ["E", "T", "K", "N", "R", "L", "P"];

    const currentWeekDates = getDatesInRange(weekStart, weekEnd).map((date) => {
        return format(date, "dd");
    });

    const loading = calendarEvents.length === 0 && false;

    let calendarSlotSize = width < 1020 ? 100 : 125;

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
                    projects: params.projects,
                    temp: 0,
                    temp2: 0
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
            <Box sx={{ marginLeft: "60px", marginTop: "28px" }}>
                {timesList.map((time) => (
                    <Box key={time} sx={{ position: "relative" }}>
                        <Box sx={{ position: "absolute", top: "-10px", left: "-50px", color: "#707070" }}>
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
                    maxWidth: "877px",
                }}>
                {columnsList.map((column, columnIndex, columnArray) => (
                    <Box key={column} width={slotWidth} sx={{
                        minWidth: slotWidth,
                        backgroundColor: (columnArray.length - 1 === columnIndex || columnArray.length - 2 === columnIndex) ? "#ff000008" : ""
                    }}>
                        <Box sx={{
                            height: "28px",
                            color: "#464646",
                            backgroundColor: "#ffffffb3",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderLeft: lineColor + " solid 1px",
                            borderRight: columnArray.length - 1 === columnIndex ? lineColor + " solid 1px" : ""
                        }}>
                            {days[columnIndex] + " " + currentWeekDates[columnIndex]}
                        </Box>
                        {rowsList.map((row, rowIndex, rowArray) => (
                            <Box key={row} sx={{
                                height: slotWidth * 2 / 3,
                                borderTop: lineColor + " solid 1px",
                                borderLeft: lineColor + " solid 1px",
                                borderBottom: rowArray.length - 1 === rowIndex ? lineColor + " solid 1px" : "",
                                borderRight: columnArray.length - 1 === columnIndex ? lineColor + " solid 1px" : "",
                            }}/>
                        ))}
                    </Box>
                ))}
            </Box>
        )
    }

    return (
        <>
            <Box sx={{ marginBottom: "50px", /*marginLeft: width < 1200 ? 0 : "45px"*/ }}>
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
                            backgroundColor: "#c9c9c9",
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

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "50px",
                    }}>
                        {timeMatrix(8, calendarSlotSize)}
                        <Box sx={{
                            position: "relative",
                            maxWidth: "90vw",
                            overflow: "auto",
                            width: width < 850 ? "75vw" : "auto",
                        }}>
                            <CalendarEvent temp={3} temp2={5}/>
                            <CalendarEvent temp={1} temp2={3}/>
                            <CalendarEvent temp={2} temp2={3}/>

                            {eventMatrix(8, 7, calendarSlotSize)}
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Calendar;
