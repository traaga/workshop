import {Box, TextField, Typography, Select, MenuItem, SelectChangeEvent, InputLabel} from "@mui/material";
import {MobileDatePicker, DesktopDatePicker, TimePicker} from '@mui/x-date-pickers';
import {useState} from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import etLocale from "date-fns/locale/et";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";
import useWindowDimensions from "../other/useWindowDimensions";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import {CalendarEvent} from "./CalendarEvent";
import useFirebase from "../other/useFirebase";

const EventCreation = () => {

    /*
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
     */

    // , , , space, color,

    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [spots, setSpots] = useState(0);
    const [color, setColor] = useState("1");

    const [loadingNewEvent, setLoadingNewEvent] = useState(false);
    const [error, setError] = useState("");

    const {width} = useWindowDimensions();
    const {addEvent} = useFirebase();

    const handleChangeStart = (newValue: Date | null) => {
        if (newValue) {
            setStart(newValue);
            const endTime = new Date(newValue.getFullYear(), newValue.getMonth(), newValue.getDate(),
                end.getHours(), end.getMinutes());
            setEnd(endTime);
        }
    };

    const handleChangeEnd = (newValue: Date | null) => {
        if (newValue) {
            const endTime = new Date(start.getFullYear(), start.getMonth(), start.getDate(),
                newValue.getHours(), newValue.getMinutes());
            setEnd(endTime);
        }
    };

    const handleChangeTitle = (newValue: any) => {
        setTitle(newValue.target.value);
    };

    const handleChangeDescription = (newValue: any) => {
        setDescription(newValue.target.value);
    };

    const handleChangeSpots = (newValue: any) => {
        setSpots(newValue.target.value);
    };

    const handleColor = (event: SelectChangeEvent) => {
        setColor(event.target.value as string);
    };

    const handleSubmit = () => {

        const startTime = Math.round(start.getTime() / 1000);
        const endTime = Math.round(end.getTime() / 1000);

        if (endTime - startTime < 900) {
            setError("Ebasobilik ajavahemik!")
            return
        }

        if (title === "") {
            setError("Pealkiri on puudu!")
            return
        }

        if (spots < 1) {
            setError("Liiga vähe vabu kohti!")
            return
        }

        setLoadingNewEvent(true);

        const event: CalendarEvent = {
            id: "",
            title: title,
            start: startTime,
            end: endTime,
            space: spots,
            color: color,
            projects: [],
            description: description
        }

        console.log(start, startTime)
        console.log(end, endTime)

        addEvent(event).then(() => {
            setLoadingNewEvent(false);
            setError("");
            setTitle("");
            setStart(new Date());
            setEnd(new Date());
            setColor("1");
            setSpots(0);
            setDescription("");
        })
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={etLocale}>
                <Box sx={{display: "flex", flexDirection: "column", marginBottom: "50px", marginTop: "100px"}}>

                    <Typography variant={"h6"} sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>Lisa uus sündmus<AdminPanelSettingsIcon/></Typography>


                    <TextField
                        required
                        margin="dense"
                        size="small"
                        id="title"
                        label="Pealkiri"
                        type="text"
                        variant="outlined"
                        value={title}
                        onChange={handleChangeTitle}
                    />

                    <TextField
                        margin="dense"
                        size="small"
                        id="description"
                        label="Kirjeldus"
                        type="text"
                        variant="outlined"
                        multiline
                        rows={5}
                        //sx={{width: "100%"}}
                        sx={{marginTop: "16px"}}
                        value={description}
                        onChange={handleChangeDescription}
                    />

                    <Box sx={{display: "flex", gap: "10px", marginTop: "16px"}}>

                        {width > 1000 ? (
                            <DesktopDatePicker
                                label="Kuupäev"
                                inputFormat="dd/MM/yyyy"
                                value={start}
                                onChange={handleChangeStart}
                                renderInput={(params) => <TextField sx={{width: "145px"}} required margin="dense"
                                                                    size="small" {...params} />}
                            />
                        ) : (
                            <MobileDatePicker
                                label="Kuupäev"
                                inputFormat="dd/MM/yyyy"
                                value={start}
                                onChange={handleChangeStart}
                                renderInput={(params) => <TextField sx={{width: "145px"}} required margin="dense"
                                                                    size="small" {...params} />}
                            />
                        )}


                        <TimePicker
                            label="Algus"
                            value={start}
                            onChange={handleChangeStart}
                            renderInput={(params) => <TextField sx={{width: "105px"}} required margin="dense"
                                                                size="small" {...params} />}
                        />

                        <TimePicker
                            label="Lõpp"
                            value={end}
                            onChange={handleChangeEnd}
                            renderInput={(params) => <TextField sx={{width: "105px"}} required margin="dense"
                                                                size="small" {...params} />}
                        />

                    </Box>

                    <Box sx={{display: "flex", gap: "10px", marginTop: "16px"}}>

                        <Select
                            id="color-select"
                            value={color}
                            onChange={handleColor}
                            size="small"
                            margin="dense"
                            sx={{marginTop: "8px", marginBottom: "4px"}}
                        >
                            <MenuItem value={1}>
                                <Box sx={{
                                    width: "15px",
                                    height: "15px",
                                    marginTop: "4px",
                                    backgroundColor: "blue",
                                    borderRadius: "50%"
                                }}/>
                            </MenuItem>
                            <MenuItem value={2}>
                                <Box sx={{
                                    width: "15px",
                                    height: "15px",
                                    marginTop: "4px",
                                    backgroundColor: "yellow",
                                    borderRadius: "50%"
                                }}/>
                            </MenuItem>
                            <MenuItem value={3}>
                                <Box sx={{
                                    width: "15px",
                                    height: "15px",
                                    marginTop: "4px",
                                    backgroundColor: "lime",
                                    borderRadius: "50%"
                                }}/>
                            </MenuItem>
                            <MenuItem value={4}>
                                <Box sx={{
                                    width: "15px",
                                    height: "15px",
                                    marginTop: "4px",
                                    backgroundColor: "red",
                                    borderRadius: "50%"
                                }}/>
                            </MenuItem>
                        </Select>

                        <TextField
                            required
                            margin="dense"
                            size="small"
                            id="space"
                            label="Vabad kohad"
                            type="number"
                            variant="outlined"
                            sx={{width: "125px"}}
                            value={spots}
                            onChange={handleChangeSpots}
                        />

                    </Box>

                    {error &&
                        <Typography sx={{marginTop: "10px", color: "red"}}>{error}</Typography>
                    }

                    <LoadingButton
                        loading={loadingNewEvent}
                        variant="contained"
                        size="medium"
                        sx={{
                            width: "100%",
                            margin: "24px 0px"
                        }}
                        onClick={handleSubmit}
                    >
                        Lisa sündmus
                    </LoadingButton>

                </Box>
            </LocalizationProvider>
        </>
    );
};

export default EventCreation;
