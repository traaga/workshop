import {Box, Button, InputBase, Paper, Typography,} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
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
                <Typography sx={{margin: "15px 0", textAlign: "center"}}>
                    Liitu uudiskirjaga
                </Typography>

                <Box id="mc_embed_signup">
                    <form
                        action="https://facebook.us18.list-manage.com/subscribe/post?u=cab32173eee6691cda646699b&amp;id=48d30139e2&amp;f_id=00c215e7f0"
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                    >
                        <Box id="mc_embed_signup_scroll" sx={{display: "flex"}}>

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
                                    sx={{ml: 1, flex: 1}}
                                    placeholder="Email"
                                    type="email"
                                    name="EMAIL"
                                    id="mce-EMAIL"
                                    required
                                    defaultValue=""
                                    inputProps={{"aria-label": "search google maps"}}
                                />
                            </Paper>

                            <Box style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                                <input type="text"
                                       name="b_cab32173eee6691cda646699b_48d30139e2"
                                       tabIndex={-1}
                                       readOnly={true}
                                />
                            </Box>

                            <Button
                                variant="text"
                                className={classes.join}
                                sx={{width: "75px"}}
                                type="submit"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                            >
                                Liitu
                            </Button>

                        </Box>
                    </form>
                </Box>

            </Box>
        </>
    );
};

export default NewsletterInput;
