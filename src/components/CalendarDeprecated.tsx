import { Box, Button, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import WeekPicker from "./WeekPicker";
import CircularProgress from '@mui/material/CircularProgress';
import useFirebase from "../other/useFirebase";
import { collection, getDocs, where, query, startAt, orderBy } from "firebase/firestore";
import CalendarEventComponent, { CalendarEvent } from "./CalendarEvent";
import SelectProjectDialog from "./SelectProjectDialog";
import useWindowDimensions from "../other/useWindowDimensions";
import startOfWeek from "date-fns/startOfWeek";
import etLocale from "date-fns/locale/et";
import endOfWeek from "date-fns/endOfWeek";
import { format } from 'date-fns';
import ViewEvents from "./ViewEvents";
import { GlobalStateContext } from "../other/GlobalStateContext";

const CalendarDeprecated = () => {

    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
    const [chosenDate, setChosenDate] = useState<Date | null>(new Date("July 20, 2022 15:30:00")); // TODO: Remove date string from Date()
    const [selectedEventsIDs, setSelectedEventsIDs] = useState<string[]>([]);
    const [isViewDialogOpen, setViewDialogOpen] = useState(false);
    const [isSelectProjectDialogOpen, setSelectProjectDialogOpen] = useState(false);
    const [loadingEvents, setLoadingEvents] = useState(false);
    const [loading, setLoading] = useState(false);

    // TODO: Remove it!
    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const { width } = useWindowDimensions();
    const { user } = useContext(GlobalStateContext);
    const { db, unRegisterFromEvent } = useFirebase();

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

    let calendarSlotSize = width < 1020 ? 100 : 125;

    const lineColor = "#dbdbdb";

    const actionButton = () => {

        let count = 0;
        let buttonText = "";

        selectedEventsIDs.forEach(id => {
            if(user?.events.includes(id))
                count++;
        });

        if(count === selectedEventsIDs.length && selectedEventsIDs.length > 0) {
            buttonText = "Eemalda registreering";

            if(selectedEventsIDs.length > 1)
                buttonText += "ud";

            return (
                <Box sx={{ display: "flex", height: "50px" }}>
                    <Button variant="contained" onClick={handleUnRegister} sx={{
                        color: "whitesmoke",
                        backgroundColor: "#272727",
                        border: "1px solid #272727",
                        borderRadius: "5px",
                        width: "300px",
                        lineHeight: "1.25",
                        '&:hover': {
                            backgroundColor: "#505050",
                        },
                    }}>
                        {!loading ?
                            (buttonText)
                            : <CircularProgress sx={{ color: "whitesmoke", height: "20px !important", width: "20px !important" }}/>}
                    </Button>
                </Box>
            )

        } else if (count === 0 && selectedEventsIDs.length > 0) {
            buttonText = "Registreeri";

            return (
                <Box sx={{ display: "flex", height: "50px" }}>
                    <Button variant="contained" onClick={handleRegister} sx={{
                        color: "whitesmoke",
                        backgroundColor: "#272727",
                        border: "1px solid #272727",
                        borderRadius: "5px",
                        width: "300px",
                        lineHeight: "1.25",
                        '&:hover': {
                            backgroundColor: "#505050",
                        },
                    }}>
                        {!loading ?
                            (buttonText)
                            : <CircularProgress sx={{ color: "whitesmoke", height: "20px !important", width: "20px !important" }}/>}
                    </Button>
                </Box>
            )
        }

        return (
            <Box sx={{ display: "flex", height: "50px" }}>
                <Button disabled sx={{
                    color: "#272727 !important",
                    backgroundColor: "whitesmoke !important",
                    border: "1px solid #272727",
                    borderRadius: "5px",
                    width: "300px",
                    lineHeight: "1.25",
                    '&:hover': {
                        backgroundColor: "#505050",
                    },
                }}>
                    Registreerimiseks vali üks või mitu sündmust
                </Button>
            </Box>
        )
    }

    useEffect(() => {

        const fetchEvents = async () => {

            setLoadingEvents(true);

            // TODO: Need a better solution but firestore doesn't allow multiple inequality signs in multiple fields
            const weekEventsQuery = query(eventsCollectionRef,
                orderBy("start"),
                startAt(weekStart.getTime() / 1000),
                where("start", "<", weekEnd.getTime() / 1000 - 3600));

            const data = await getDocs(weekEventsQuery);

            setCalendarEvents(data.docs.map((doc) => {
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

            setLoadingEvents(false);
        };

        fetchEvents();
    }, [chosenDate]);

    const handleUnselectAll = () => {
        setSelectedEventsIDs([])
    }

    const handleToday = () => {
        setChosenDate(new Date());
    }

    const handleUnRegister = async () => {
        setLoading(true);

        selectedEventsIDs.forEach(eventId => unRegisterFromEvent(eventId));

        setLoading(false);
        handleUnselectAll();
    }

    const handleRegister = async () => {
        setLoading(true);

        //selectedEventsIDs.forEach(eventId => unRegisterFromEvent(eventId));

        setLoading(false);
        handleUnselectAll();
    }

    const handleViewEventsOpen = () => {
        if(selectedEventsIDs.length) {
            setViewDialogOpen(true);
        }
    };

    const handleViewEventsClose = () => {
        setViewDialogOpen(false);
    };

    const handleSelectProjectDialogOpen = () => {
        if(selectedEventsIDs.length) {
            setSelectProjectDialogOpen(true);
        }
    }

    const handleSelectProjectDialogClose = () => {
        setSelectProjectDialogOpen(false);
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
                    flexWrap: "wrap",
                    marginBottom: "20px",
                    alignItems: "center",
                    gap: "20px"
                }}>
                    <Box sx={{ display: "flex" }}>
                        <Button onClick={handleToday} sx={{
                            width: "75px",
                            padding: "0px 20px",
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
                            minWidth: "155px",
                            border: "1px solid #272727",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            borderRight: "none",
                            backgroundColor: "#272727",
                            color: "whitesmoke",
                            padding: "0px 20px",
                            gap: "7px",
                            '&:hover': {
                                backgroundColor: "#505050",
                            },
                        }}>
                            <Typography variant="subtitle2">Tühista valik</Typography>
                            <Typography variant="subtitle2">({selectedEventsIDs.length})</Typography>
                        </Button>

                        <Button
                            //onClick={handleViewEventsOpen}
                            onClick={handleSelectProjectDialogOpen}
                            sx={{
                            border: "1px solid #272727",
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            width: "145px",
                            lineHeight: "1.25",
                            '&:hover': {
                                backgroundColor: "white",
                            },
                        }}>
                            Vaata
                        </Button>
                    </Box>

                    {user && actionButton()}

                </Box>

                <Box sx={{
                    backgroundColor: "whitesmoke",
                    position: "relative",
                    userSelect: "none",
                }}>
                    {loadingEvents &&
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
            {isViewDialogOpen &&
                <ViewEvents
                    isOpen={isViewDialogOpen}
                    closeDialog={handleViewEventsClose}
                    eventsIDsToView={selectedEventsIDs}
                />
            }
            {isSelectProjectDialogOpen &&
                <SelectProjectDialog
                    isOpen={isSelectProjectDialogOpen}
                    closeDialog={handleSelectProjectDialogClose}
                    eventsIDs={selectedEventsIDs}
                />
            }
        </>
    );
};

export default CalendarDeprecated;
