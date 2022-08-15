import { Box, Button, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import useWindowDimensions from "../other/useWindowDimensions";

const ContactUsForm = () => {
    const { width } = useWindowDimensions();
    return (
        <>
            <Box sx={ {
                display: "flex",
                gap: "64px",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: "0 50px 200px 50px"
            } }>
                <Box
                    width={ width > 600 ? "auto" : "80vw" }
                    sx={ {
                        display: "flex",
                        flexDirection: "column",
                        //justifyContent: "center",
                        //gap: "12px",
                        backgroundColor: "white"
                    } }
                >
                    <Box
                        sx={ {
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginTop: "10px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        } }
                    >
                        <PhoneIcon sx={ { color: "#272727" } } fontSize="large"/>
                        <Typography>+372 5809 3634</Typography>
                    </Box>
                    <Box
                        sx={ {
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginTop: "10px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        } }
                    >
                        <EmailIcon sx={ { color: "#272727" } } fontSize="large"/>
                        <Typography>fellinitookoda@gmail.com</Typography>
                    </Box>
                    <Box
                        sx={ {
                            display: "flex",
                            alignItems: "center",
                            gap: "16px",
                            marginTop: "10px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        } }
                    >
                        <LocationOnIcon
                            sx={ { color: "#272727" } }
                            fontSize="large"
                        />
                        <Typography>
                            Turu 7, Viljandi, 71012 Viljandi maakond
                        </Typography>
                    </Box>
                    <Box
                        component="iframe"
                        width={ width > 600 ? "480px" : "80vw" }
                        sx={ {
                            height: 360,
                            //width: 480,
                            border: "none",
                            marginTop: "12px",
                        } }
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2092.637138409192!2d25.592244316164287!3d58.365791094940775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ec98851636b21b%3A0x7db9bab15f33af3!2sTuru%207%2C%20Viljandi%2C%2071012%20Viljandi%20maakond!5e0!3m2!1sen!2see!4v1643974070019!5m2!1sen!2see"
                    />
                </Box>
                <Box
                    width={ width > 600 ? "480px" : "80vw" }
                    sx={ {
                        display: "flex",
                        flexDirection: "column",
                        //width: "480px",
                        gap: "24px",
                    } }
                >
                    <TextField
                        margin="dense"
                        id="name"
                        label="Nimi"
                        type="text"
                        fullWidth
                        variant="filled"
                        sx={ { backgroundColor: "#efefef", margin: "0" } }
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                        variant="filled"
                        sx={ { margin: "0" } }
                    />
                    <TextField
                        margin="dense"
                        id="message"
                        label="Sõnum"
                        type="text"
                        fullWidth
                        variant="filled"
                        multiline
                        rows={ 11 }
                        sx={ { margin: "0" } }
                    />
                    <Button
                        variant="contained"
                        size="medium"
                        sx={ {
                            width: "100%",
                            margin: "0",
                        } }
                    >
                        Saada meile sõnum
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default ContactUsForm;
