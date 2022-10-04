import { Box, Tab, Tabs } from "@mui/material";
import CalendarEventComponent, { CalendarEvent } from "./CalendarEvent";
import CalendarActionButtons from "./CalendarActionButtons";
import useWindowDimensions from "../other/useWindowDimensions";
import { useState, SyntheticEvent } from "react";

const CalendarCompact = () => {

    const { width } = useWindowDimensions();

    const [openTab, setOpenTab] = useState(0);

    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        setOpenTab(newValue);
    };

    const tempEvent: CalendarEvent =
        {
            id: "123",
            title: "Title",
            start: 123,
            end: 123,
            space: 5,
            color: "red",
            projects: [],
            description: "description"
        };

    const dates = ["26", "27", "28", "29", "30", "1", "2"];
    const days = ["E", "T", "K", "N", "R", "L", "P"];

    return (
        <Box sx={{
            marginBottom: "150px"
        }}>
            <CalendarActionButtons/>

            <Box sx={{ display: "flex", justifyContent: "center" }}>

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
                            border: day === "N" ? "2px solid #7575ff" : "2px solid whitesmoke",
                            marginBottom: "20px"

                        }}>{dates[index]}</Box>

                            <CalendarEventComponent event={tempEvent} firstTime={0}
                                                    firstDay={0}
                                                    selectedEventsIDs={[]}
                                                    setSelectedEventsIDs={() => console.log()}/>
                    </Box>
                )}
            </Box>

            <Box sx={{ width: '100%', marginTop: "100px" }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={openTab} onChange={handleTabChange}>
                        <Tab label="Item One" value={0}/>
                        <Tab label="Item Two" value={1}/>
                        <Tab label="Item Three" value={2}/>
                    </Tabs>
                </Box>

                <Box sx={{ visibility: openTab === 0 ? "visible" : "hidden" }}>
                    Item One
                </Box>

                <Box sx={{ visibility: openTab === 1 ? "visible" : "hidden" }}>
                    Item Two
                </Box>

                <Box sx={{ visibility: openTab === 2 ? "visible" : "hidden" }}>
                    Item Three
                </Box>


            </Box>

        </Box>
    );
};

export default CalendarCompact;
