import { Box, Theme, Typography } from "@mui/material";
import NewsletterInput from "./NewsletterInput";
import SocialMediaList from "./SocialMediaList";
import { makeStyles } from "@mui/styles";
import useWindowDimensions from "../hooks/useWindowDimensions";

const useStyles = makeStyles((theme: Theme) => ({
    wide: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: "10%",
        margin: "50px 0"
    },
    narrow: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
        gap: "50px"
    }
}));

const Footer = () => {
    const classes = useStyles();
    const { width } = useWindowDimensions();
    return (
        <>
            <Box>
                <Box
                    sx={ {
                        backgroundColor: "white",
                        color: "#272727",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    } }
                >
                    <Box
                        className={ width > 700 ? classes.wide : classes.narrow }
                    >
                        <Box
                            component="img"
                            sx={ {
                                height: 240,
                                width: 240,
                            } }
                            src="images/logo1.png"
                        />
                        <SocialMediaList/>
                    </Box>
                    <NewsletterInput/>
                </Box>
                <Box
                    sx={ {
                        backgroundColor: "#272727",
                        display: "flex",
                        justifyContent: "center",
                        color: "#D9D9D9",
                        padding: "6px 0",
                    } }
                >
                    <Typography fontSize={ "12px" }>
                        © 2022 MTÜ Fellini Töökoda. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
