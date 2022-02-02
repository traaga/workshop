import { useContext } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogContentText,
    Avatar,
    Box
} from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

interface LoginDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
    openRegisterDialog: () => void;
    openForgotPasswordDialog: () => void;
}

const LoginDialog = ({
    isOpen,
    closeDialog,
    openRegisterDialog,
    openForgotPasswordDialog,
}: LoginDialogProps) => {
    const { setAuthenticated } = useContext(GlobalStateContext);

    const handleLogin = () => {
        setAuthenticated(true);
        closeDialog();
    };

    const handleClose = () => {
        closeDialog();
    };

    const handleRegister = () => {
        openRegisterDialog();
        closeDialog();
    };

    const handleForgotPassword = () => {
        openForgotPasswordDialog();
        closeDialog();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogContent sx={{ backgroundColor: "#efefef" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "24px 0px",
                    }}
                >
                    <Avatar
                        src="images/icon320-square.png"
                        sx={{
                            height: 200,
                            width: 200,
                        }}
                    />
                </Box>
                <TextField
                    margin="dense"
                    id="username"
                    label="Kasutajanimi"
                    type="text"
                    fullWidth
                    variant="filled"
                />
                <TextField
                    margin="dense"
                    id="password"
                    label="Parool"
                    type="password"
                    fullWidth
                    variant="filled"
                />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="text" size="small" onClick={handleForgotPassword}>
                        Unustasid Parooli?
                    </Button>
                </Box>
                <Button
                    variant="contained"
                    size="medium"
                    sx={{ width: "100%", margin: "24px 0px" }}
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
                    <Button variant="text" size="small" onClick={handleRegister}>
                        Registreeru
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;
