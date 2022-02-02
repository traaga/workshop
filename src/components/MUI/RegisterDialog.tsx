import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    Avatar,
} from "@mui/material";
import { Box } from "@mui/system";

interface RegisterDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const RegisterDialog = ({ isOpen, closeDialog }: RegisterDialogProps) => {
    const handleRegister = () => {
        console.log("Registered!");
        closeDialog();
    };

    const handleClose = () => {
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
                    id="firstname"
                    label="Eesnimi"
                    type="text"
                    fullWidth
                    variant="filled"
                />
                <TextField
                    margin="dense"
                    id="lastname"
                    label="Perenimi"
                    type="text"
                    fullWidth
                    variant="filled"
                />
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
                    id="email"
                    label="Email Aaddress"
                    type="email"
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
                <TextField
                    margin="dense"
                    id="passwordagain"
                    label="Parool Uuesti"
                    type="password"
                    fullWidth
                    variant="filled"
                />
                <Button
                    variant="contained"
                    size="medium"
                    sx={{ width: "100%", marginTop: "24px" }}
                    onClick={handleRegister}
                >
                    Registreeru
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default RegisterDialog;
