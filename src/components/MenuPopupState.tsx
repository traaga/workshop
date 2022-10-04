import * as React from "react";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import { Button, MenuItem, Theme, IconButton, Avatar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import {
    usePopupState,
    bindHover,
    bindMenu,
} from "material-ui-popup-state/hooks";
import { makeStyles } from "@mui/styles";

interface CustomMenuItem {
    label: string;
    location: string;
    props?: any;
}

interface MenuPopupStateProps {
    buttonText: string;
    menuItems?: CustomMenuItem[];
    buttonProps?: any;
    image?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        color: theme.palette.primary.main,
        height: "64px",
        fontSize: "1.15rem",
        fontWeight: "400",
        padding: "6px 15px",
        paddingTop: "8px",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "whitesmoke",
        }
    },
}));

const MenuPopupState = ({
    buttonText,
    menuItems,
    buttonProps,
    image,
}: MenuPopupStateProps) => {
    const classes = useStyles();
    const popupState = usePopupState({
        variant: "popover",
        popupId: "popOverMenuId", // No clue why this is needed
    });

    console.log(document.location.pathname, buttonProps.to);

    return (
        <React.Fragment>
            {buttonText === "Konto" ? (
                <IconButton
                    id="account"
                    className={classes.button}
                    sx={{ padding: "12px 10px", width: "64px" }}
                    {...bindHover(popupState)}
                    {...buttonProps}
                >
                    <Avatar
                        src={ image ? image : "images/plank-profile.jpg"}
                        sx={{ width: 40, height: 40 }}
                    />
                </IconButton>
            ) : (
                <Button
                    color="secondary"
                    className={classes.button}
                    {...bindHover(popupState)}
                    {...buttonProps}
                >
                    <Box
                        sx={{
                            borderBottom: document.location.pathname === buttonProps.to ? "2px solid #d9d9d9" : "2px solid transparent"
                        }}
                    >
                        {buttonText}
                    </Box>
                </Button>
            )}

            {menuItems && (
                <HoverMenu
                    {...bindMenu(popupState)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                    {menuItems.map((menuItem) => (
                        <MenuItem
                            key={menuItem.label}
                            component={Link}
                            to={menuItem.location}
                            onClick={popupState.close}
                            {...menuItem.props}
                        >
                            {menuItem.label}
                        </MenuItem>
                    ))}
                </HoverMenu>
            )}
        </React.Fragment>
    );
};

export default MenuPopupState;
