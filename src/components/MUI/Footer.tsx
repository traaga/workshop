import { Box, Typography } from "@mui/material";
import NewsletterInput from "./NewsletterInput";
import SocialMediaList from "./SocialMediaList";

const Footer = () => {
    return (
        <>
            <Box>
                <Box
                    sx={{
                        backgroundColor: "#272727",
                        display: "flex",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 240,
                            width: 240,
                        }}
                        src="images/icon320-square.png"
                    ></Box>
                    <SocialMediaList />
                    <NewsletterInput />
                </Box>
                <Box
                    sx={{
                        backgroundColor: "#272727",
                        display: "flex",
                        justifyContent: "center",
                        color: "#a79b8f",
                        padding: "6px 0",
                    }}
                >
                    <Typography fontSize={"12px"}>
                        © 2022 MTÜ Fellini Töökoda. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default Footer;
