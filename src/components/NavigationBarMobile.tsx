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

    const { user } = useContext(GlobalStateContext);

    const [open, setOpen] = useState<boolean>(false);

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
                        height: "100%",
                        width: "180px",
                        overflow: "hidden"
                    }}
                >
                    <Box
                        component="img"

                        sx={{
                            transform: "scale(0.4)",
                            paddingRight: "17px",
                            paddingBottom: "17px",
                            filter: "invert(15%) sepia(0%) saturate(0%) hue-rotate(63deg) brightness(95%) contrast(98%)", // color #272727
                        }}
                        src="images/logo.svg"
                    />
                </Button>

                {user ? (
                    <MenuPopupState
                        buttonText={"Konto"}
                        menuItems={accountLinks}
                        image={user.photo ? user.photo : "images/plank-profile.jpg"}
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
            </Drawer>
        </>
    );
};

export default NavigationBarMobile;
