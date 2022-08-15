import { Box, Button, Dialog, DialogContent, IconButton, TextField, Typography, Select, MenuItem, SelectChangeEvent, Divider } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import useWindowDimensions from "../other/useWindowDimensions";
import { useState } from "react";

interface SelectProjectDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
    eventsIDs: string[];
}

const SelectProjectDialog = ({ isOpen, closeDialog, eventsIDs }: SelectProjectDialogProps) => {

    const { width } = useWindowDimensions();

    const [loading, setLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");

    const handleClose = () => {
        setLoading(false);
        closeDialog();
    };

    const element = document.querySelector("html");

    if (isOpen) {
        element?.classList.add("no-scroll");
    } else {
        element?.classList.remove("no-scroll");
    }

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose} fullScreen={width < 500}>
                <DialogContent sx={{
                    padding: width < 500 ? "50px calc(20% / 2)" : "20px 50px",
                    width: width < 500 ? "80%" : "300px",
                    height: width < 500 ? "100vh" : "inherit",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    position: "relative"
                }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "24px",
                            paddingBottom: "32px",
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: 64,
                                width: 136,
                            }}
                            src="images/logo2-3.png"
                        />
                    </Box>

                    <form>

                        <Typography fontSize={"13px"} sx={{marginBottom: "5px"}}>
                            Registreerimiseks vali varasemalt loodud projekt:
                        </Typography>

                        <Select
                            id="demo-simple-select"
                            value={""}
                            //onChange={handleChange}
                            sx={{ width: "100%" }}
                            size="small"
                        >
                            <MenuItem value={"10"}>Ten</MenuItem>
                            <MenuItem value={"20"}>Twenty</MenuItem>
                            <MenuItem value={"30"}>Thirty</MenuItem>
                        </Select>

                        <Typography fontSize={"13px"} sx={{marginTop: "24px", marginBottom: "5px"}}>
                            Või loo uus projekt:
                        </Typography>

                        <TextField
                            required
                            margin="dense"
                            size="small"
                            id="description"
                            label="Kirjeldus"
                            type="text"
                            variant="outlined"
                            multiline
                            rows={ 6 }
                            sx={{ width: "100%", margin: "0px" }}
                        />

                        <LoadingButton
                            loading={loading}
                            variant="contained"
                            size="medium"
                            sx={{
                                width: "100%",
                                margin: "24px 0px"
                            }}
                            //onClick={handleLogin}
                        >
                            Logi Sisse
                        </LoadingButton>

                    </form>

                    {width < 500 &&
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                width: "64px",
                                height: "64px",
                                position: "absolute",
                                right: "5vw",
                                top: "5vw"
                            }}>
                            <CloseIcon sx={{ width: "40px", height: "40px", color: "#272727" }}/>
                        </IconButton>
                    }

                </DialogContent>
            </Dialog>
        </>
    );
};

export default SelectProjectDialog;
