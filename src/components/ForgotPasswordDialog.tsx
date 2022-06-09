import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";

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
            {/*<DialogContent sx={{ backgroundColor: "#efefef" }}>*/}
            <DialogContent sx={{ width: "300px"}}>

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
                        margin="dense"
                        size="small"
                        id="email"
                        label="Email"
                        type="text"
                        variant="outlined"
                        autoComplete="email"
                        sx={{ width: "100%" }}
                    />


                    <Button
                        variant="contained"
                        size="medium"
                        sx={{ width: "100%", marginTop: "24px" }}
                        onClick={handleClose}
                    >
                        Saada email
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    );
};

export default ForgotPasswordDialog;
