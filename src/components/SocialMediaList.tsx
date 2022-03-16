import {Box, Button, Theme, Typography} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        display: "flex",
        gap: "10px",
        textTransform: "none",
    },
}));

const SocialMediaList = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start"
            }}>
                <Box>
                    <Button
                        className={classes.button} href={"https://www.facebook.com/fellinitookoda"}
                        rel={"noopener noreferrer"} target={"_blank"}
                    >
                        <FacebookIcon fontSize="large" />
                        <Typography>fellinitookoda</Typography>
                    </Button>
                </Box>
                <Box>
                    <Button className={classes.button} href={"https://www.instagram.com/fellinitookoda/"}
                            rel={"noopener noreferrer"} target={"_blank"}>
                        <InstagramIcon fontSize="large" />
                        <Typography>fellinitookoda</Typography>
                    </Button>
                </Box>
                {/*<Box>
                    <Button className={classes.button} href={""}
                            rel={"noopener noreferrer"} target={"_blank"}>
                        <TwitterIcon fontSize="large" />
                        <Typography>kirvejapuudega</Typography>
                    </Button>
                </Box>*/}
            </Box>
        </>
    );
};

export default SocialMediaList;
