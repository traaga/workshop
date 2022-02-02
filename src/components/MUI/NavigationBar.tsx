import { useState, useContext } from "react";
import {
    Button,
    AppBar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Theme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../State/GlobalStateContext";
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";
import ForgotPasswordDialog from "./ForgotPasswordDialog";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
        height: "64px",
    },
}));

const NavigationBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = anchorEl;

    const [isLoginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);
    const [isRegisterDialogOpen, setRegisterDialogOpen] =
        useState<boolean>(false);
    const [isForgotPasswordDialogOpen, setForgotPasswordDialogOpen] =
        useState<boolean>(false);

    const { titleFull, isAuthenticated, setAuthenticated } =
        useContext(GlobalStateContext);

    const classes = useStyles();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const handleLogOut = () => {
        setAnchorEl(null);
        setAuthenticated(false);
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
                        <Button
                            id="workshop"
                            color="secondary"
                            className={classes.button}
                            onClick={handleClick}
                        >
                            Avatud töökoda
                        </Button>

                        <Button
                            id="infocenter"
                            color="secondary"
                            className={classes.button}
                            onClick={handleClick}
                        >
                            Infokeskus
                        </Button>

                        <Button
                            component={Link}
                            to="/contact"
                            color="secondary"
                            className={classes.button}
                        >
                            Kontakt
                        </Button>

                        {isAuthenticated ? (
                            <IconButton
                                id="account"
                                onClick={handleClick}
                                className={classes.button}
                            >
                                <Avatar
                                    src="images/profile.jpg"
                                    sx={{ width: 32, height: 32 }}
                                />
                            </IconButton>
                        ) : (
                            <Button
                                color="secondary"
                                onClick={handleLoginDialogOpen}
                                className={classes.button}
                            >
                                Logi sisse
                            </Button>
                        )}
                    </Box>

                    {anchorEl?.id === "workshop" && (
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            PaperProps={{
                                style: { backgroundColor: "#efefef" },
                            }}
                            open={Boolean(open)}
                            onClose={handleClose}
                        >
                            <MenuItem
                                component={Link}
                                to="/prices"
                                onClick={handleClose}
                            >
                                Hinnakiri
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/rules"
                                onClick={handleClose}
                            >
                                Kodukord
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/opportunities"
                                onClick={handleClose}
                            >
                                Võimalused
                            </MenuItem>
                        </Menu>
                    )}

                    {anchorEl?.id === "infocenter" && (
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            PaperProps={{
                                style: { backgroundColor: "#efefef" },
                            }}
                            open={Boolean(open)}
                            onClose={handleClose}
                        >
                            <MenuItem
                                component={Link}
                                to="/timetable"
                                onClick={handleClose}
                            >
                                Tunniplaan
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/courses"
                                onClick={handleClose}
                            >
                                Koolitused
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/consulting"
                                onClick={handleClose}
                            >
                                Nõustamised
                            </MenuItem>
                        </Menu>
                    )}

                    {anchorEl?.id === "account" && (
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            PaperProps={{
                                style: { backgroundColor: "#efefef" },
                            }}
                            open={Boolean(open)}
                            onClose={handleClose}
                        >
                            <MenuItem
                                component={Link}
                                to="/account"
                                onClick={handleClose}
                            >
                                Minu konto
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/settings"
                                onClick={handleClose}
                            >
                                Seaded
                            </MenuItem>
                            <MenuItem
                                component={Link}
                                to="/"
                                onClick={handleLogOut}
                            >
                                Logi Välja
                            </MenuItem>
                        </Menu>
                    )}
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
