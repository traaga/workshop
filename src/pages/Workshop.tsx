import { useContext, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";

//import { Calendar, momentLocalizer  } from "react-big-calendar";
//import "react-big-calendar/lib/css/react-big-calendar.css";
//import moment from "moment";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Workshop = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "Avatud Töökoda | " + titleFull;

    const [value, onChange] = useState(new Date());

    /*const localizer = momentLocalizer(moment);
    const events = [
        {
            start: moment().toDate(),
            end: moment()
                .add(1, "days")
                .toDate(),
            title: "Some title"
        }
    ];*/

    return (
        <>
            <NavigationBar/>
            <ContentContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography>Kalender</Typography>
                <Typography>Töölaua ja tööriistarendi hinnakiri</Typography>
                <Typography>Kodukord ning ohutusest</Typography>
                <Typography>Lisaks pakume: Hoiu võimalus, Materjali hankimine, Käsitööriistade rent</Typography>

                <Calendar onChange={onChange} value={value}/>

                {/*<Calendar
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={events}
                    style={{ height: "75vh", width: "75vw", margin: "100px 0" }}
                />*/}

            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Workshop;
