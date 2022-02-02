import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import Footer from "../MUI/Footer";
import { Box, Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";

const Home = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Avaleht";

    const body = document.getElementsByTagName("body");

    if (body) {
        document.getElementsByTagName("body")[0].style.backgroundColor =
            "#d9ccbf"; // good color
    }

    const temps = [1, 2, 3];
    const render = true;

    return (
        <>
            <NavigationBar />
            <Box
                width={"100vw"}
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
