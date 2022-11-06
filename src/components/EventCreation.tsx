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

    const [value, setValue] = useState(new Date());
    const [loadingNewEvent, setLoadingNewEvent] = useState(false);

    const {width} = useWindowDimensions();

    const handleChange = (newValue: any) => {
        console.log(newValue)
        //setValue(newValue);
    };

    const [color, setColor] = useState("1");

    const handleColor = (event: SelectChangeEvent) => {
        setColor(event.target.value as string);
    };

    const handleSubmit = () => {

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
                    />

                    <Box sx={{display: "flex", gap: "10px", marginTop: "16px"}}>

                        {width > 1000 ? (
                            <DesktopDatePicker
                                label="Kuupäev"
                                inputFormat="dd/MM/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField sx={{width: "145px"}} required margin="dense"
                                                                    size="small" {...params} />}
                            />
                        ) : (
                            <MobileDatePicker
                                label="Kuupäev"
                                inputFormat="dd/MM/yyyy"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField sx={{width: "145px"}} required margin="dense"
                                                                    size="small" {...params} />}
                            />
                        )}


                        <TimePicker
                            label="Algus"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField sx={{width: "105px"}} required margin="dense"
                                                                size="small" {...params} />}
                        />

                        <TimePicker
                            label="Lõpp"
                            value={value}
                            onChange={handleChange}
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
                        />

                    </Box>

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
