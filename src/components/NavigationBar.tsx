import {useContext, useState} from "react";
import {AppBar, Box, Button, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {GlobalStateContext} from "../state/GlobalStateContext";
import LoginDialog from "./LoginDialog";
import MenuPopupState from "./MenuPopupState";
import useWindowDimensions from "../hooks/useWindowDimensions";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = () => {
    const [, setAnchorEl] = useState<null | HTMLElement>(null);
    const {width} = useWindowDimensions();

    const handleLogOut = () => {
        setAnchorEl(null);
        setAuthenticated(false);
    };

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
            props: {onClick: handleLogOut},
        },
    ];

    const [isLoginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);

    const {isAuthenticated, setAuthenticated} =
        useContext(GlobalStateContext);

    const handleLoginDialogOpen = () => {
        setAnchorEl(null);
        setLoginDialogOpen(true);
    };

    const handleLoginDialogClose = () => {
        setAnchorEl(null);
        setLoginDialogOpen(false);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="relative" sx={{paddingRight: "0 !important", boxShadow: 0}}>
                {width >= 900 ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "128px",
                            padding: "0px 100px",
                            backgroundColor: "#FFFFFF"
                        }}
                    >
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                padding: "0"
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    height: 64, // 48   64   80   96
                                    width: 136, // 102  136  170  204
                                }}
                                src="images/logo2-3.png"
                            />
                        </Button>
                        <Box>
                            <MenuPopupState
                                buttonText={"Avatud Töökoda"}
                                buttonProps={{
                                    component: Link,
                                    to: "/workshop",
                                }}
                            />

                            <MenuPopupState
                                buttonText={"Infokeskus"}
                                buttonProps={{
                                    component: Link,
                                    to: "/infocenter",
                                }}
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
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "96px",
                            padding: "0px 24px",
                            backgroundColor: "#FFFFFF"
                        }}
                    >
                        <IconButton>
                            <MenuIcon sx={{width: 48, height: 48}}/>
                        </IconButton>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                height: "100%"
                            }}
                        >
                            <Box
                                component="img"

                                sx={{
                                    height: 64, // 64   96
                                    width: 136, // 136  204
                                }}
                                src="images/logo2-3.png"
                            />
                        </Button>
                        {isAuthenticated ? (
                            <MenuPopupState
                                buttonText={"Konto"}
                                menuItems={accountLinks}
                            />
                        ) : (
                            <MenuPopupState
                                buttonText={"Konto"}
                                menuItems={accountLinks}
                            />
                        )}
                    </Box>
                )}
            </AppBar>
            <LoginDialog
                isOpen={isLoginDialogOpen}
                closeDialog={handleLoginDialogClose}
            />
        </Box>
    );
};

export default NavigationBar;