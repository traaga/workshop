import {
    Box,
    Paper,
    InputBase,
    Button,
    Typography,
    Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    join: {
        color: "#efefef",
        backgroundColor: "#272727",
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0",
        "&:hover": {
            backgroundColor: "#4c4c4c",
        }
    },
}));

const NewsletterInput = () => {
    const classes = useStyles();
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginBottom: "50px"
                }}
            >
                <Typography sx={{ margin: "15px 0", textAlign: "center" }}>
                    Liitu uudiskirjaga
                </Typography>
                <Box sx={{ display: "flex" }}>
                    <Paper
                        sx={{
                            p: "2px 4px",
                            display: "flex",
                            alignItems: "center",
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                            boxShadow: "0",
                            backgroundColor: "whitesmoke",
                            width: "max(calc(30vw - 75px), 225px)"
                        }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Email"
                            inputProps={{ "aria-label": "search google maps" }}
                        />
                    </Paper>
                    <Button variant="text" className={classes.join} sx={{width: "75px"}}>
                        Liitu
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default NewsletterInput;
