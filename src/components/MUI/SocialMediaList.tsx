import { Box, Typography, Button, Theme } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        display: "flex",
        color: "#efefef",
        gap: "10px",
        textTransform: "none",
    },
}));

const SocialMediaList = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ width: "240px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box onClick={() => console.log(1)}>
                    <Button className={classes.button}>
                        <FacebookIcon fontSize="large" sx={{ color: "#b38d66" }}/>
                        <Typography>kirvejapuudega</Typography>
                    </Button>
                </Box>
                <Box onClick={() => console.log(1)}>
                    <Button className={classes.button}>
                        <InstagramIcon fontSize="large" sx={{ color: "#b38d66" }}/>
                        <Typography>kirvejapuudega</Typography>
                    </Button>
                </Box>
                <Box onClick={() => console.log(1)}>
                    <Button className={classes.button}>
                        <TwitterIcon fontSize="large" sx={{ color: "#b38d66" }}/>
                        <Typography>kirvejapuudega</Typography>
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default SocialMediaList;
