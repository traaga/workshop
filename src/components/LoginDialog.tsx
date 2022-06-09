import { useContext, useState } from "react";
import { Box, Button, Dialog, DialogContent, TextField, Typography, } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import RegisterDialog from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import GoogleIcon from '@mui/icons-material/Google';

interface LoginDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const LoginDialog = ({
                         isOpen,
                         closeDialog,
                     }: LoginDialogProps) => {
    const { setAuthenticated } = useContext(GlobalStateContext);

    const [isRegisterDialogOpen, setRegisterDialogOpen] =
        useState<boolean>(false);

    const [isForgotPasswordDialogOpen, setForgotPasswordDialogOpen] =
        useState<boolean>(false);

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

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogContent sx={{ padding: "20px 50px" }}>
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
                                margin="dense"
                                size="small"
                                id="email"
                                label="Email"
                                type="text"
                                variant="outlined"
                                autoComplete="email"
                                sx={{ width: "300px" }}
                            />
                            <TextField
                                margin="dense"
                                size="small"
                                id="password"
                                label="Parool"
                                type="password"
                                variant="outlined"
                                autoComplete="current-password"
                                sx={{ width: "300px" }}
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
                            sx={{ width: "300px", margin: "24px 0px" }}
                            onClick={handleLogin}
                        >
                            Logi Sisse
                        </Button>
                    </form>

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography fontSize={"13px"}>
                            Või mõne muu kontoga:
                        </Typography>

                        <Button sx={{
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
