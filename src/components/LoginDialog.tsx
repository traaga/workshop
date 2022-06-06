import { useContext, useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogContentText,
    Avatar,
    Box,
} from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import RegisterDialog from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";

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
                            padding: "24px 0px",
                        }}
                    >
                        <Box
                            component="img"
                            src="images/logo1.png"
                            sx={{
                                height: 200,
                                width: 200,
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email"
                            type="text"
                            variant="filled"
                            sx={{ width: "300px" }}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Parool"
                            type="password"
                            variant="filled"
                            sx={{ width: "300px" }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            variant="text"
                            size="small"
                            onClick={handleForgotPasswordOpen}
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
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "center",
                        }}
                    >
                        <DialogContentText>Pole kontot?</DialogContentText>
                        <Button
                            variant="text"
                            size="small"
                            onClick={handleRegisterOpen}
                        >
                            Registreeru
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
