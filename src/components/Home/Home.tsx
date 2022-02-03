import { useContext, useEffect } from "react";
import NavigationBar from "../MUI/NavigationBar";
import Footer from "../MUI/Footer";
import { Box, Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { titleShort } = useContext(GlobalStateContext);

    document.title = titleShort + " | Avaleht";
    
    // TODO: Fix this bs with react-router
    const navigate = useNavigate();
    useEffect(() => {
        if (document.location.pathname === "/workshop") {
            navigate("/");
            window.location.reload();
        }
    });

    const temps = [1, 2, 3];
    const render = true;

    return (
        <>
            <NavigationBar />
            <Box
                width={"100%"}
                sx={{
                    backgroundColor: "#272727",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 320,
                        width: 320,
                        paddingBottom: "40px",
                    }}
                    src="images/icon320-square.png"
                ></Box>
            </Box>
            <Typography>Kirjeldus, Video+pildid, missioon</Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                {render &&
                    temps.map((temp) => (
                        <Box
                            key={temp}
                            component="img"
                            sx={{
                                height: 320,
                                width: 320,
                                marginBottom: "10px"
                            }}
                            src="images/icon320-square.png"
                        ></Box>
                    ))}
            </Box>
            <Footer />
        </>
    );
};

export default Home;
