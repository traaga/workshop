import {Box, TextField, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {GlobalStateContext} from "../other/GlobalStateContext";
import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const UserInfo = () => {

    const { user } = useContext(GlobalStateContext);

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [phone, setPhone] = useState(user?.phone);

    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleEdit = () => {

    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", marginTop: "65px", width: "375px"}}>

            <Typography variant={"h6"} sx={{marginBottom: "5px"}}>Minu andmed</Typography>

            <TextField
                disabled
                margin="dense"
                size="small"
                id="id"
                label="ID"
                type="text"
                variant="outlined"
                defaultValue={user?.id}
            />

            <TextField
                required
                disabled={disabled}
                margin="dense"
                size="small"
                id="name"
                label="Nimi"
                type="text"
                variant="outlined"
                defaultValue={name}
            />

            <TextField
                required
                disabled={disabled}
                margin="dense"
                size="small"
                id="email"
                label="Email"
                type="text"
                variant="outlined"
                defaultValue={email}
            />

            <TextField
                required
                disabled={disabled}
                margin="dense"
                size="small"
                id="phone"
                label="Telefon"
                type="text"
                variant="outlined"
                defaultValue={phone}
            />

            {disabled ? (<LoadingButton
                variant="contained"
                size="medium"
                sx={{
                    width: "100%",
                    margin: "24px 0px"
                }}
                onClick={() => setDisabled(false)}
            >
                Muuda andmeid
            </LoadingButton>) : (<LoadingButton
                variant="contained"
                size="medium"
                sx={{
                    width: "100%",
                    margin: "24px 0px"
                }}
                onClick={() => setDisabled(true)}
            >
                Salvesta
            </LoadingButton>)}

        </Box>
    );
};

export default UserInfo;
