import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import WeekPicker from "./WeekPicker";
import CircularProgress from '@mui/material/CircularProgress';
import useFirebase from "../other/useFirebase";
import { collection, getDocs } from "firebase/firestore";
import CalendarEventComponent, { CalendarEvent } from "./CalendarEvent";
import useWindowDimensions from "../other/useWindowDimensions";
import startOfWeek from "date-fns/startOfWeek";
import etLocale from "date-fns/locale/et";
import endOfWeek from "date-fns/endOfWeek";
import { format } from 'date-fns';

const Calendar = () => {

    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date());
    const [selectedEventsIDs, setSelectedEventsIDs] = useState<string[]>([]);

    const { width } = useWindowDimensions();
    const { db } = useFirebase();

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

    const loading = calendarEvents.length === 0;

    let calendarSlotSize = width < 1020 ? 100 : 125;

    const lineColor = "#dbdbdb";

    useEffect(() => {

        const fetchEvents = async () => {
            const data = await getDocs(eventsCollectionRef);

            setCalendarEvents(data.docs.map((doc) => {
                const params = doc.data();

                const event: CalendarEvent = {
                    id: doc.id,
                    start: params.start.seconds,
                    end: params.end.seconds,
                    projects: params.projects,
                    description: params.description
                }

                return event;
            }));
        };

        fetchEvents();
    }, []);

    const handleUnselectAll = () => {
        setSelectedEventsIDs([])
    }

    const handleToday = () => {
        setChosenDate(new Date());
    }

    const startTimes = calendarEvents.map((event) => {
        return parseInt(format(new Date(event.start * 1000), "H"));
    });

    const endTimes = calendarEvents.map((event) => {
        return parseInt(format(new Date(event.end * 1000), "H"));
    });

    const startTime = Math.min(...startTimes);
    let endTime = Math.max(...endTimes);

    if (endTime - startTime < 5) {
        endTime += 5 - endTime + startTime;
    }

    const timeMatrix = (times: number, slotWidth: number) => {

        const timesList: number[] = [];

        if (startTime && endTime) {
            for (let i = startTime; i <= endTime; i++) {
                timesList.push(i);
            }
        } else {
            for (let i = 10; i <= 15; i++) {
                timesList.push(i);
            }
        }

        return (
            <Box sx={{ marginLeft: "60px", marginTop: "28px" }}>
                {timesList.map((time) => (
                    <Box key={time} sx={{ position: "relative" }}>
                        <Box sx={{ position: "absolute", top: "-10px", left: "-50px", color: "#707070" }}>
                            {time < 10 ? "0" + time + ":00" : time + ":00"}
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
            <Box sx={{ marginBottom: "50px" }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: width < 600 ? "column" : "row",
                    marginBottom: "20px",
                    alignItems: "center",
                    gap: "20px"
                }}>
                    <Box sx={{ display: "flex" }}>
                        <Button onClick={handleToday} sx={{
                            border: "1px solid #272727",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            borderRight: "none",
                            backgroundColor: "#272727",
                            color: "whitesmoke",
                            '&:hover': {
                                backgroundColor: "#505050",
                            },
                        }}>Täna</Button>
                        <WeekPicker value={chosenDate} setValue={setChosenDate}/>
                    </Box>

                    <Box sx={{ display: "flex", height: "50px" }}>
                        <Button onClick={handleUnselectAll} sx={{
                            width: "125px",
                            border: "1px solid #272727",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            borderRight: "none",
                            backgroundColor: "#272727",
                            color: "whitesmoke",
                            padding: "0px 14px",
                            '&:hover': {
                                backgroundColor: "#505050",
                            },
                        }}>Tühista valik</Button>
                        <Typography variant="subtitle2" sx={{
                            border: "1px solid #272727",
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            //height: "48px",
                            width: "147px",
                            gap: "10px",
                            textAlign: "center",
                            textTransform: "uppercase",
                            paddingTop: "13px",
                        }}>Valitud: {selectedEventsIDs.length}</Typography>
                    </Box>
                </Box>

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

                            {calendarEvents.map((event) => (
                                <CalendarEventComponent key={event.id} event={event} firstTime={startTime}
                                                        firstDay={parseInt(currentWeekDates[0])}
                                                        selectedEventsIDs={selectedEventsIDs}
                                                        setSelectedEventsIDs={setSelectedEventsIDs}/>
                            ))}

                            {eventMatrix(endTime && startTime ? endTime - startTime + 1 : 6, 7, calendarSlotSize)}
                        </Box>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default Calendar;
