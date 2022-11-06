import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import { Box, Typography, Avatar } from "@mui/material";
import { GlobalStateContext } from "../other/GlobalStateContext";
import EventCreation from "../components/EventCreation";
import UserInfo from "../components/UserInfo";
import LoadingButton from "@mui/lab/LoadingButton";
import * as React from "react";
import useFirebase from "../other/useFirebase";
import {Link} from "react-router-dom";

const Account = () => {
    const { titleFull, user } = useContext(GlobalStateContext);
    document.title = "Konto | " + titleFull;

    const { logOut } = useFirebase();

    const handleLogOut = () => {
        logOut().then(() => {
            window.scrollTo(0, 0);
            window.location.reload();
        });
    };

    return (
        <>
            <NavigationBar />
            <ContentContainer sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <UserInfo/>

                {user?.role === "admin" &&
                    <EventCreation/>
                }

                <LoadingButton
                    variant="contained"
                    size="medium"
                    color="error"
                    component={Link}
                    to="/"
                    sx={{
                        width: "200px",
                        margin: "50px 0px"
                    }}
                    onClick={handleLogOut}
                >
                    Logi välja
                </LoadingButton>

            </ContentContainer>
            <Footer />
        </>
    );
};

export default Account;
