import {
    Box,
    Paper,
    InputBase,
    Button,
    Divider,
    Typography,
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    join: {
        color: "#efefef",
        backgroundColor: "#b38d66",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        "&:hover": {
            backgroundColor: "#957656",
        }
    },
}));

const NewsletterInput = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                sx={{
                    width: "240px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Typography sx={{ color: "#efefef", marginBottom: "6px" }}>
                    Liitu uudiskirjaga
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <Paper
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            width: 250,
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Email"
                            inputProps={{ "aria-label": "search google maps" }}
                        />
                    </Paper>
                    <Button variant="text" className={classes.join}>
                        Liitu
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default NewsletterInput;
