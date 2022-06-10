import { Box, Button, Dialog, DialogContent, IconButton, TextField, Typography } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { validateEmail } from "../other/Validation";
import { useState } from "react";

interface ForgotPasswordDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const ForgotPasswordDialog = ({
                                  isOpen,
                                  closeDialog,
                              }: ForgotPasswordDialogProps) => {

    const [emailError, setEmailError] = useState<string>("");

    const { width } = useWindowDimensions();

    const handleClose = () => {
        closeDialog();
    };

    const handleSendEmail = () => {
        const email = document.getElementById("email") as HTMLInputElement;
        const emailErr = validateEmail(email.value);

        if (!emailErr) {

            console.log("Sent!");
            closeDialog();

        } else {
            setEmailError(emailErr);
        }
    }

    const element = document.querySelector("html");

    if(isOpen) {
        element?.classList.add("no-scroll");
    } else {
        element?.classList.remove("no-scroll");
    }

    return (
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

                <Typography fontSize={"13px"}>
                    Siia sisestage oma email, et saaksime teile parooli taastamiseks vajaliku emaili saata
                </Typography>

                <form>

                    <TextField
                        error={!!emailError}
                        helperText={emailError ? emailError : ""}
                        required
                        margin="dense"
                        size="small"
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        autoComplete="email"
                        sx={{ width: "100%" }}
                    />

                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ width: "100%", marginTop: "24px" }}
                        onClick={handleSendEmail}
                    >
                        Saada email
                    </Button>

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
    );
};

export default ForgotPasswordDialog;
