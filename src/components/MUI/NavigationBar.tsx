import { useState, useContext } from "react";
import {
    Button,
    AppBar,
    Box,
    Theme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../State/GlobalStateContext";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import { makeStyles } from "@mui/styles";
import MenuPopupState from "./MenuPopupState";

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
        height: "64px",
        fontFamily: `"Granaina", "Montserrat", "Helvetica", "Arial", sans-serif`,
        fontSize: "1.5rem",
        letterSpacing: "0.15rem",
        padding: "6px 10px",
    },
}));

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = anchorEl;

    const handleLogOut = () => {
        setAnchorEl(null);
        setAuthenticated(false);
    };

    const workshopLinks = [
        {
            label: "Hinnakiri",
            location: "/prices",
        },
        {
            label: "Kodukord",
            location: "/rules",
        },
        {
            label: "Võimalused",
            location: "/opportunities",
        },
    ];

    const infocenterLinks = [
        {
            label: "Tunniplaan",
            location: "/timetable",
        },
        {
            label: "Koolitused",
            location: "/courses",
        },
        {
            label: "Nõustamised",
            location: "/consulting",
        },
    ];

    const accountLinks = [
        {
            label: "Minu konto",
            location: "/account",
        },
        {
            label: "Seaded",
            location: "/settings",
        },
        {
            label: "Logi välja",
            location: "/",
            props: { onClick: handleLogOut },
        },
    ];

    const [isLoginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);
    const [isRegisterDialogOpen, setRegisterDialogOpen] =
        useState<boolean>(false);
    const [isForgotPasswordDialogOpen, setForgotPasswordDialogOpen] =
        useState<boolean>(false);

    const { titleFull, isAuthenticated, setAuthenticated } =
        useContext(GlobalStateContext);

    const classes = useStyles();

    // Move below code to LoginDialog.tsx
    
    const handleLoginDialogOpen = () => {
        setAnchorEl(null);
        setLoginDialogOpen(true);
    };

    const handleLoginDialogClose = () => {
        setAnchorEl(null);
        setLoginDialogOpen(false);
    };

    const handleRegisterDialogOpen = () => {
        setRegisterDialogOpen(true);
    };

    const handleRegisterDialogClose = () => {
        setRegisterDialogOpen(false);
    };

    const handleForgotPasswordDialogOpen = () => {
        setForgotPasswordDialogOpen(true);
    };

    const handleForgotPasswordDialogClose = () => {
        setForgotPasswordDialogOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ height: "64px" }} />
            <AppBar position="fixed">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "64px",
                        padding: "0px 24px",
                    }}
                >
                    <Box>
                        <Button
                            component={Link}
                            to="/"
                            color="secondary"
                            className={classes.button}
                        >
                            {titleFull}
                        </Button>
                    </Box>
                    <Box>
                        <MenuPopupState
                            buttonText={"Avatud Töökoda"}
                            menuItems={workshopLinks}
                        />

                        <MenuPopupState
                            buttonText={"Infokeskus"}
                            menuItems={infocenterLinks}
                        />

                        <MenuPopupState
                            buttonText={"Kontakt"}
                            buttonProps={{
                                component: Link,
                                to: "/contact",
                            }}
                        />

                        {isAuthenticated ? (
                            <MenuPopupState
                                buttonText={"Konto"}
                                menuItems={accountLinks}
                            />
                        ) : (
                            <MenuPopupState
                                buttonText={"Logi sisse"}
                                buttonProps={{
                                    onClick: handleLoginDialogOpen,
                                }}
                            />
                        )}
                    </Box>
                </Box>
            </AppBar>
            <LoginDialog
                isOpen={isLoginDialogOpen}
                closeDialog={handleLoginDialogClose}
                openRegisterDialog={handleRegisterDialogOpen}
                openForgotPasswordDialog={handleForgotPasswordDialogOpen}
            />
            <RegisterDialog
                isOpen={isRegisterDialogOpen}
                closeDialog={handleRegisterDialogClose}
            />
            <ForgotPasswordDialog
                isOpen={isForgotPasswordDialogOpen}
                closeDialog={handleForgotPasswordDialogClose}
            />
        </Box>
    );
};

export default NavigationBar;
