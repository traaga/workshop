import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogContentText,
    Avatar,
    Box
} from "@mui/material";

interface ForgotPasswordDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const ForgotPasswordDialog = ({
    isOpen,
    closeDialog,
}: ForgotPasswordDialogProps) => {

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
                    id="email"
                    label="Email Aaddress"
                    type="email"
                    fullWidth
                    variant="filled"
                />
                <Button
                    variant="contained"
                    size="medium"
                    sx={{ width: "100%", marginTop: "24px" }}
                    onClick={handleClose}
                >
                    Saada
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default ForgotPasswordDialog;
