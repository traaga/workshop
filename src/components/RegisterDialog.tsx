import { Button, Dialog, DialogContent, TextField, } from "@mui/material";
import { Box } from "@mui/system";

interface RegisterDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

export const validateEmail = (email: number) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

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
            <DialogContent sx={{
                padding: "20px 50px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {/*<Box
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
                </Box>*/}
                <Box sx={{ display: "flex", gap: "10px"}}>
                    <TextField
                        margin="dense"
                        id="firstname"
                        label="Eesnimi"
                        type="text"
                        sx={{ width: "225px" }}
                        variant="filled"
                    />
                    <TextField
                        margin="dense"
                        id="lastname"
                        label="Perenimi"
                        type="text"
                        sx={{ width: "225px" }}
                        variant="filled"
                    />
                </Box>
                <Box sx={{ display: "flex", gap: "10px"}}>
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        sx={{ width: "225px" }}
                        variant="filled"
                    />
                    <TextField
                        margin="dense"
                        id="phone"
                        label="Telefon"
                        type="phone"
                        sx={{ width: "225px" }}
                        variant="filled"
                    />
                </Box>
                <Box sx={{ display: "flex", gap: "10px"}}>
                    <TextField
                        margin="dense"
                        id="password"
                        label="Parool"
                        type="password"
                        sx={{ width: "225px" }}
                        variant="filled"
                    />
                    <TextField
                        margin="dense"
                        id="passwordagain"
                        label="Parool Uuesti"
                        type="password"
                        sx={{ width: "225px" }}
                        variant="filled"
                    />
                </Box>
                <Button
                    variant="contained"
                    size="medium"
                    sx={{ width: "460px", marginTop: "24px" }}
                    onClick={handleRegister}
                >
                    Registreeru
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default RegisterDialog;
