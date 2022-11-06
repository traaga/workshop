import { useContext, useEffect, useState } from "react";
import { AppBar, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../other/GlobalStateContext";
import LoginDialog from "./LoginDialog";
import MenuPopupState from "./MenuPopupState";
import useWindowDimensions from "../other/useWindowDimensions";
import NavigationBarMobile from "./NavigationBarMobile";
import useFirebase from "../other/useFirebase";

const NavigationBar = () => {
    const [, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isLoginDialogOpen, setLoginDialogOpen] = useState<boolean>(false);

    const { width } = useWindowDimensions();
    const { logOut, checkLogin } = useFirebase();

    const { user } = useContext(GlobalStateContext);

    const handleLogOut = () => {
        logOut().then(() => {
            setAnchorEl(null);
            window.location.reload();
        });
    };

    useEffect(() => {
        checkLogin();
    }, [])

    const accountLinks = [
        {
            label: "Minu konto",
            location: "/account",
        },
        /*{
            label: "Seaded",
            location: "/settings",
            props: { disabled: true },
        },*/
        {
            label: "Logi välja",
            location: "/",
            props: { onClick: handleLogOut },
        },
    ];

    const handleLoginDialogOpen = () => {
        setAnchorEl(null);
        setLoginDialogOpen(true);
    };

    const handleLoginDialogClose = () => {
        setAnchorEl(null);
        setLoginDialogOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative" sx={{ paddingRight: "0 !important", boxShadow: 0 }}>
                {width >= 1000 ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "128px",
                            padding: "0px 100px",
                            backgroundColor: "#FFFFFF",
                            zIndex: "1"
                        }}
                    >
                        {/*<Button
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
                        </Button>*/}

                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                padding: "0",
                                height: "96px",
                                width: "196px",
                                objectFit: "cover",
                                overflow: "hidden",
                                paddingRight: "8px",
                                paddingBottom: "10px"
                            }}
                        >
                            <Box
                                component="img"
                                sx={{
                                    //height: 64, // 48   64   80   96
                                    //width: 136, // 102  136  170  204
                                    filter: "invert(15%) sepia(0%) saturate(0%) hue-rotate(63deg) brightness(95%) contrast(98%)", // color #272727
                                    transform: "scale(0.45)",
                                }}
                                src="images/logo.svg"
                            />
                        </Button>

                        <Box>
                            <MenuPopupState
                                buttonText={"Avaleht"}
                                buttonProps={{
                                    component: Link,
                                    to: "/",
                                }}
                            />

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

                            {user ? (
                                <MenuPopupState
                                    buttonText={"Konto"}
                                    //menuItems={accountLinks}
                                    buttonProps={{
                                        component: Link,
                                        to: "/account",
                                    }}
                                    image={user.photo ? user.photo : "images/plank-profile.jpg"}
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
                    <NavigationBarMobile logIn={handleLoginDialogOpen} logOut={handleLogOut}/>
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
