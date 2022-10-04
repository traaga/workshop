import { Box } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";
import { format } from "date-fns";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../other/GlobalStateContext";

export interface CalendarEvent {
    id: string,
    title: string,
    start: number,
    end: number,
    space: number,
    color: string,
    projects: string[],
    description: string
}

export interface CalendarEventProps {
    event: CalendarEvent,
    firstTime: number,
    firstDay: number,
    selectedEventsIDs: string[],
    setSelectedEventsIDs: Dispatch<SetStateAction<string[]>>,
}

const CalendarEventComponent = (props: CalendarEventProps) => {

    const [selected, setSelected] = useState<boolean>(false);

    const { width } = useWindowDimensions();
    const { user } = useContext(GlobalStateContext);

    const date = new Date(props.event.start * 1000);
    const date2 = new Date(props.event.end * 1000);

    const dayOfEvent = parseInt(format(date, "d"));
    const startOfEvent = format(date, "HH");
    const endOfEvent = format(date2, "HH");

    const slotX = props.firstDay ? dayOfEvent - props.firstDay : -1;
    const slotY = props.firstTime ? parseInt(startOfEvent) - props.firstTime : -1;

    const handleSelect = () => {

        if(selected) {

            const filtered = props.selectedEventsIDs.filter((value) => {
                return value !== props.event.id;
            });

            props.setSelectedEventsIDs(filtered);

        } else {
            props.setSelectedEventsIDs([...props.selectedEventsIDs, props.event.id]);
        }

    }

    useEffect(() => {

        setSelected(props.selectedEventsIDs.includes(props.event.id));

    }, [props.selectedEventsIDs]);

    return (
        <>
            {width < 1020 ?
                <Box onClick={handleSelect} sx={{
                    //position: "absolute",
                    //top: (99 * 2 / 3) * slotY + slotY * 1.8 + 28 + 5,
                    //left: 99 * slotX + slotX + 5,
                    width: 99 - 5 * 2 - 3,
                    height: 99 * 2 / 3 - 5 * 2,
                    backgroundColor: user?.events.includes(props.event.id) ? props.event.color + "20" : "white",
                    borderLeft: props.event.color ? props.event.color + " solid 5px" : "white solid 3px",
                    borderRadius: "5px",
                    '&:hover': {
                        backgroundColor: user?.events.includes(props.event.id) ? props.event.color + "10" : "#eeeeee",
                        cursor: "pointer"
                    },
                    boxShadow: selected ? "0 0 2px 2px #272727" : "none",
                }}>
                    <Box sx={{
                        padding: "4px",
                        marginLeft: "6px",
                        fontSize: "10px"
                    }}>
                        <Box sx={{ color: "#818181", width: "78px", height: "12px" }}>
                            { startOfEvent && endOfEvent ? startOfEvent + ":00 - " + endOfEvent + ":00" : "00:00 - 00:00" }
                        </Box>
                        <Box sx={{width: "78px", height: "24px"}}>
                            { props.event.title ? props.event.title : "no title" }
                        </Box>
                        <Box sx={{
                            width: "78px",
                            height: "12px",
                            fontStyle: "italic",
                            fontSize: "9px",
                            marginTop: "2px"
                        }}>
                            Vabu kohti:
                            { props.event.projects ? " " + (5 - props.event.projects.length) : " -1" }
                        </Box>
                    </Box>
                </Box> :
                <Box onClick={handleSelect} sx={{
                    //position: "absolute",
                    //top: (124 * 2 / 3) * slotY + slotY * 1.8 + 28 + 5,
                    //left: 124 * slotX + slotX + 5,
                    //width: (124) - 5 * 2 - 3,
                    //height: (124) * 2 / 3 - 5 * 2,
                    width: "110px",
                    height: "75px",
                    backgroundColor: user?.events.includes(props.event.id) ? props.event.color + "20" : "white",
                    borderLeft: props.event.color ? props.event.color + " solid 5px" : "white solid 3px",
                    borderRadius: "5px",
                    '&:hover': {
                        backgroundColor: user?.events.includes(props.event.id) ? props.event.color + "10" : "#eeeeee",
                        cursor: "pointer"
                    },
                    boxShadow: selected ? "0 0 3px 3px #272727" : "none",
                }}>
                    <Box sx={{
                        padding: "5px",
                        fontSize: "12px"
                    }}>

                        <Box sx={{
                            color: "#818181",
                            overflow: "hidden",
                            height: "14px",
                            width: "101px"
                        }}>
                            { startOfEvent && endOfEvent ? startOfEvent + ":00 - " + endOfEvent + ":00" : "00:00 - 00:00" }
                        </Box>

                        <Box sx={{
                            overflow: "hidden",
                            height: "32px",
                            width: "101px"
                        }}>
                            { props.event.title ? props.event.title : "no title" }
                        </Box>

                        <Box sx={{
                            overflow: "hidden",
                            height: "14px",
                            width: "101px",
                            marginTop: "3px",
                            fontStyle: "italic"
                        }}>
                            Vabu kohti:
                            { props.event.projects ? " " + (5 - props.event.projects.length) : " -1" }
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
};

export default CalendarEventComponent;
