import {Box, Skeleton} from "@mui/material";
import CalendarEventComponent, {CalendarEvent} from "./CalendarEvent";
import CalendarActionButtons from "./CalendarActionButtons";
import useWindowDimensions from "../other/useWindowDimensions";
import {useEffect, useState} from "react";
import CalendarMobile from "./CalendarMobile";
import startOfWeek from "date-fns/startOfWeek";
import etLocale from "date-fns/locale/et";
import {collection, getDocs, orderBy, query, startAt, where} from "firebase/firestore";
import endOfWeek from "date-fns/endOfWeek";
import useFirebase from "../other/useFirebase";
import CircularProgress from "@mui/material/CircularProgress";

const Calendar = () => {

    const [date, setDate] = useState<Date>(new Date()); // Remove later date string
    const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
    const [loadingEvents, setLoadingEvents] = useState(true);

    const {width} = useWindowDimensions();
    const {db} = useFirebase();

    const eventsCollectionRef = collection(db, "events");

    const weekStart = startOfWeek(date, {
        locale: etLocale,
        weekStartsOn: 1
    });

    const weekEnd = endOfWeek(date, {
        locale: etLocale,
        weekStartsOn: 1
    });

    const getDates = () => {
        const dates = [];

        // 24h is 8.64e+7 ms
        for (let i = 0; i < 7; i++) {
            dates.push(new Date(weekStart.getTime() + i * 8.64e+7));
        }
        return dates;
    }

    const areSameDates = (dateA: Date, dateB: Date) => {
        const sameDay = dateA.getDate() === dateB.getDate();
        const sameMonth = dateA.getMonth() === dateB.getMonth();
        return sameDay && sameMonth;
    }

    const displayCalendarEvents = (index: number) => {
        const filteredEvents = calendarEvents.filter(event => {
            if (areSameDates(new Date(event.start * 1000), dates[index]))
                return event;
        });

        if (filteredEvents.length === 0) {
            return <Box sx={{
                textAlign: width < 800 ? "initial" : "center",
                color: "#999999",
                padding: "0px 10px",
                fontSize: "14px"
            }}>Ei leidu sündmusi</Box>
        }

        return filteredEvents.map((event) =>
            <CalendarEventComponent key={event.id} event={event} firstTime={0}
                                    firstDay={0}
                                    selectedEventsIDs={[]}
                                    setSelectedEventsIDs={() => console.log()}/>
        )
    }

    const days = ["E", "T", "K", "N", "R", "L", "P"];
    const dates = getDates();

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
    }, [date]);

    return (
        <Box sx={{
            marginBottom: "150px"
        }}>
            <CalendarActionButtons date={date} setDate={setDate}/>

            {width > 800 ?
                <Box sx={{display: "flex", justifyContent: "center"}}>

                    {days.map((day, index) =>
                        <Box key={index} sx={{
                            width: width < 1020 ? "100px" : "125px",
                            minHeight: "200px",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            borderLeft: "2px #dddddd solid",
                            borderRight: index === 6 ? "2px #dddddd solid" : "",
                            gap: "10px",
                            padding: "30px 0",
                        }}>
                            <Box sx={{
                                position: "absolute",
                                top: "-50px",
                                fontSize: "16px",
                                fontWeight: "500",
                                marginBottom: "5px",
                                color: "#999999"
                            }}>{day}</Box>

                            <Box sx={{
                                position: "absolute",
                                top: "-20px",
                                height: "30px",
                                width: "30px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "20px",
                                fontWeight: "600",
                                borderRadius: "50%",
                                border: areSameDates(dates[index], new Date()) ? "2px solid #7575ff" : "2px solid whitesmoke",
                                marginBottom: "20px"

                            }}>{dates[index].getDate()}</Box>

                            {loadingEvents ? (
                                <CircularProgress sx={{color: "#d9d9d9"}}/>
                            ) : displayCalendarEvents(index)}

                        </Box>
                    )}
                </Box>
                :
                <CalendarMobile date={date} dates={dates} displayCalendarEvents={displayCalendarEvents}/>
            }

        </Box>
    );
};

export default Calendar;
