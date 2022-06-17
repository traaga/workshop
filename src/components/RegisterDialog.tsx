import { Box, Button, Dialog, DialogContent, IconButton, TextField, Typography, } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import useWindowDimensions from "../other/useWindowDimensions";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import { useState } from "react";
import {
    validateEmail,
    validateName,
    validatePassword,
    validatePasswordConfirm,
    validatePhone
} from "../other/Validation";
import useFirebase from "../other/useFirebase";

interface RegisterDialogProps {
    isOpen: boolean;
    closeDialog: () => void;
}

const RegisterDialog = ({ isOpen, closeDialog }: RegisterDialogProps) => {

    const [firstNameError, setFirstNameError] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [phoneError, setPhoneError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [passwordConfirmError, setPasswordConfirmError] = useState<string>("");

    const { width } = useWindowDimensions();
    const { createUserWithEmail } = useFirebase();

    const [loading, setLoading] = useState(false);

    const handleRegister = () => {

        const firstname = document.getElementById("firstname") as HTMLInputElement;
        const lastname = document.getElementById("lastname") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const phone = document.getElementById("phone") as HTMLInputElement;
        const password = document.getElementById("password") as HTMLInputElement;
        const password2 = document.getElementById("password2") as HTMLInputElement;

        const firstNameErr = validateName("Eesnimi", firstname.value);
        const lastNameErr = validateName("Perenimi", lastname.value);
        const emailErr = validateEmail(email.value);
        const phoneErr = phone.value ? validatePhone(phone.value) : "";
        const passwordErr = validatePassword(password.value);
        const passwordConfirmErr = validatePasswordConfirm(password.value, password2.value);

        if (!firstNameErr && !lastNameErr && !emailErr && !phoneErr && !passwordErr && !passwordConfirmErr) {

            setLoading(true);

            createUserWithEmail(firstname.value, lastname.value, email.value, phone.value, password.value).then(() => {
                handleClose();
            });

        } else {
            setFirstNameError(firstNameErr);
            setLastNameError(lastNameErr);
            setEmailError(emailErr);
            setPhoneError(phoneErr);
            setPasswordError(passwordErr);
            setPasswordConfirmError(passwordConfirmErr);
        }
    };

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

                    <Typography fontSize={"13px"}>
                        Uue konto loomiseks täitke järgnev küsimustik
                    </Typography>

                    <TextField
                        error={!!firstNameError}
                        helperText={firstNameError ? firstNameError : ""}
                        required
                        margin="dense"
                        size="small"
                        id="firstname"
                        label="Eesnimi"
                        type="text"
                        variant="outlined"
                        autoComplete="given-name"
                        sx={{ width: "100%" }}
                    />

                    <TextField
                        error={!!lastNameError}
                        helperText={lastNameError ? lastNameError : ""}
                        required
                        margin="dense"
                        size="small"
                        id="lastname"
                        label="Perenimi"
                        type="text"
                        variant="outlined"
                        autoComplete="family-name"
                        sx={{ width: "100%" }}
                    />

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

                    <TextField
                        error={!!phoneError}
                        helperText={phoneError ? phoneError : ""}
                        margin="dense"
                        size="small"
                        id="phone"
                        label="Telefon"
                        type="tel"
                        variant="outlined"
                        autoComplete="tel"
                        sx={{ width: "100%" }}
                    />

                    <TextField
                        required
                        error={!!passwordError}
                        helperText={passwordError ? passwordError : ""}
                        margin="dense"
                        size="small"
                        id="password"
                        label="Parool"
                        type="password"
                        variant="outlined"
                        autoComplete="new-password"
                        sx={{ width: "100%" }}
                    />

                    <TextField
                        required
                        error={!!passwordConfirmError}
                        helperText={passwordConfirmError ? passwordConfirmError : ""}
                        margin="dense"
                        size="small"
                        id="password2"
                        label="Parool uuesti"
                        type="password"
                        variant="outlined"
                        autoComplete="new-password"
                        sx={{ width: "100%" }}
                    />

                    <LoadingButton
                        loading={loading}
                        variant="contained"
                        size="medium"
                        sx={{
                            width: "100%",
                            margin: "24px 0px"
                        }}
                        onClick={handleRegister}
                    >
                        Registreeru
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
    );
};

export default RegisterDialog;
