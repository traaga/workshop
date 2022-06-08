import { Avatar, Box, Button, Drawer, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from "react";
import { KeyboardEvent, useContext, useState } from "react";
import { GlobalStateContext } from "../other/GlobalStateContext";
import MenuIcon from "@mui/icons-material/Menu";
import MenuPopupState from "./MenuPopupState";

interface NavigationBarMobileProps {
    logIn: () => void,
    logOut: () => void
}

const NavigationBarMobile = ({ logOut, logIn }: NavigationBarMobileProps) => {

    const { isAuthenticated, avatarSrc } =
        useContext(GlobalStateContext);

    const [open, setOpen] = useState<boolean>(false);

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
            props: { onClick: logOut },
        },
    ];

    const handleOpen = () => {
        toggleDrawer(true);
        setOpen(true);
    }

    const toggleDrawer =
        (open: boolean) =>
            (event: KeyboardEvent | MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as KeyboardEvent).key === 'Tab' ||
                        (event as KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }
                setOpen(open);
            };

    return (
        <>
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
                <IconButton onClick={handleOpen}>
                    <MenuIcon sx={{ width: 48, height: 48, color: "#bababa" }}/>
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
                        image={avatarSrc}
                    />
                ) : (
                    <IconButton
                        sx={{ padding: "12px 10px", width: "64px", height: "64px" }}
                        onClick={logIn}
                    >
                        <Avatar
                            src={"images/plank-profile.jpg"}
                            sx={{ width: 40, height: 40 }}
                        />
                    </IconButton>
                )}
            </Box>
            <Drawer
                anchor={"top"}
                open={open}
                onClose={toggleDrawer(false)}
            >
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
            </Drawer>
        </>
    );
};

export default NavigationBarMobile;
