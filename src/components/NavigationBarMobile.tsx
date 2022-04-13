import { Box, Button, Drawer, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { KeyboardEvent, useContext, useState } from "react";
import { GlobalStateContext } from "../state/GlobalStateContext";
import MenuIcon from "@mui/icons-material/Menu";
import MenuPopupState from "./MenuPopupState";

interface NavigationBarMobileProps {
    logOut: () => void
}

const NavigationBarMobile = ({ logOut }: NavigationBarMobileProps) => {

    const { isAuthenticated } =
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
                    />
                ) : (
                    <MenuPopupState
                        buttonText={"Konto"}
                        menuItems={accountLinks}
                    />
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
