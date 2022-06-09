import { useContext, useState } from "react";
import { Avatar, Box, Button, Dialog, DialogContent, IconButton, TextField, Typography, } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import RegisterDialog, { validateEmail } from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import GoogleIcon from '@mui/icons-material/Google';
import useWindowDimensions from "../other/useWindowDimensions";
import CloseIcon from '@mui/icons-material/Close';
import * as React from "react";

interface LoginDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const LoginDialog = ({
                         isOpen,
                         closeDialog,
                     }: LoginDialogProps) => {
    const { setAuthenticated } = useContext(GlobalStateContext);
    const { width } = useWindowDimensions();

    const [isRegisterDialogOpen, setRegisterDialogOpen] =
        useState<boolean>(false);

    const [isForgotPasswordDialogOpen, setForgotPasswordDialogOpen] =
        useState<boolean>(false);

    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const handleLogin = () => {
        setAuthenticated(true);
        closeDialog();
    };

    const handleClose = () => {
        closeDialog();
    };

    const handleRegisterOpen = () => {
        setRegisterDialogOpen(true);
        closeDialog();
    };

    const handleRegisterClose = () => {
        setRegisterDialogOpen(false);
    };

    const handleForgotPasswordOpen = () => {
        setForgotPasswordDialogOpen(true);
        closeDialog();
    };

    const handleForgotPasswordClose = () => {
        setForgotPasswordDialogOpen(false);
    };

    const element = document.querySelector("html");

    if(isOpen) {
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

                    <Typography fontSize={"13px"}>
                        Logi sisse emailiga:
                    </Typography>

                    <form>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TextField
                                error={ !!emailError }
                                helperText={ emailError ? emailError : ""}
                                margin="dense"
                                size="small"
                                id="email"
                                label="Email"
                                type="text"
                                variant="outlined"
                                autoComplete="email"
                            />
                            <TextField
                                error={ !!passwordError }
                                helperText={ passwordError ? passwordError : ""}
                                margin="dense"
                                size="small"
                                id="password"
                                label="Parool"
                                type="password"
                                variant="outlined"
                                autoComplete="current-password"
                            />
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                variant="text"
                                size="small"
                                onClick={handleForgotPasswordOpen}
                                sx={{
                                    textTransform: "capitalize"
                                }}
                            >
                                Unustasid Parooli?
                            </Button>
                        </Box>
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                width: "100%",
                                margin: "24px 0px" }}
                            onClick={handleLogin}
                        >
                            Logi Sisse
                        </Button>
                    </form>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography fontSize={"13px"}>
                            Või mõne muu kontoga:
                        </Typography>

                        <Button disabled sx={{
                            textTransform: "capitalize",
                            padding: 0,
                            fontSize: "1rem",
                            gap: "20px",
                            border: "1px solid #bdbdbd",
                            paddingRight: "20px",
                            color: "whitesmoke",
                            backgroundColor: "#ff5151",
                            '&:hover': {
                                backgroundColor: "#ff8d8d",
                            },
                            opacity: 0.67
                        }}>
                            <GoogleIcon sx={{ borderRight: "1px solid whitesmoke", padding: "4px" }}/>
                            Google
                        </Button>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "center",
                            marginTop: "10px"
                        }}
                    >
                        <Typography fontSize={"13px"}>
                            Pole kontot?
                        </Typography>
                        <Button
                            variant="text"
                            size="small"
                            onClick={handleRegisterOpen}
                            sx={{
                                textTransform: "none",
                                textDecoration: "underline"
                            }}
                        >
                            Registreeru siin
                        </Button>
                    </Box>

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
            <RegisterDialog
                isOpen={isRegisterDialogOpen}
                closeDialog={handleRegisterClose}
            />
            <ForgotPasswordDialog
                isOpen={isForgotPasswordDialogOpen}
                closeDialog={handleForgotPasswordClose}
            />
        </>
    );
};

export default LoginDialog;
