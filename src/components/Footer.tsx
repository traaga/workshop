import { Box, Theme, Typography } from "@mui/material";
import NewsletterInput from "./NewsletterInput";
import SocialMediaList from "./SocialMediaList";
import { makeStyles } from "@mui/styles";
import useWindowDimensions from "../other/useWindowDimensions";
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme: Theme) => ({
    wide: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        gap: "7%",
    },
    narrow: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "75px"
    }
}));

const Footer = () => {
    const classes = useStyles();
    const { width } = useWindowDimensions();
    return (
        <>
            <Box>
                <Box
                    sx={{
                        backgroundColor: "white",
                        color: "#272727",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Box
                        className={width > 700 ? classes.wide : classes.narrow}
                    >

                        <Box
                            component="img"
                            sx={{
                                height: "250px",
                                width: "250px",
                                paddingBottom: "10px",
                                filter: "invert(15%) sepia(0%) saturate(0%) hue-rotate(63deg) brightness(95%) contrast(98%)", // color #272727
                            }}
                            src="images/logo.svg"
                        />

                        <SocialMediaList/>
                    </Box>

                    <NewsletterInput/>

                </Box>
                <Box
                    sx={{
                        backgroundColor: "#272727",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        alignItems: "center",
                        flexDirection: width < 450 ? "column" : "row",
                    }}
                >
                    <Typography fontSize={ "12px" } color={ "#D9D9D9" } marginLeft={ width < 450 ? "0px" : "20px" }>
                        © 2022 MTÜ Fellini Töökoda. All Rights Reserved.
                    </Typography>

                    <Link href="https://www.vecteezy.com/free-vector/nature" underline="none" sx={{
                        fontSize: "12px",
                        color: "#D9D9D9",
                        display: "flex",
                        alignItems: "center",
                        marginTop: width < 450 ? "5px" : "0px",
                        marginBottom: width < 450 ? "5px" : "0px",
                        marginRight: width < 450 ? "0px" : "20px",
                    }}>
                        Animal Avatars by Vecteezy.
                    </Link>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
