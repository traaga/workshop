import { useContext } from "react";
import NavigationBar from "../MUI/NavigationBar";
import ContentContainer from "../MUI/ContentContainer";
import Footer from "../MUI/Footer";
import TeamMemberCard from "../MUI/TeamMemberCard";
import ContactUsForm from "../MUI/ContactUsForm";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../State/GlobalStateContext";
import { Box } from "@mui/system";

// Aadress, email jne; Meeskonna kirjeldused(sotsiaalmeedia kaudu); Saada email vorm

const members = [
    "Edrin Hansen",
    "Kermo Aasmäe",
    "Joosep Mattis Eriste",
    "Raimond Russi",
];

members.sort(() => Math.random() - 0.5);

const Contact = () => {
    const { titleShort } = useContext(GlobalStateContext);
    document.title = titleShort + " | Kontakt";
    return (
        <>
            <NavigationBar />
            <ContentContainer
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                        marginTop: "3em",
                        marginBottom: "2em",
                        borderBottom: "2px solid #b38d66",
                        width: "8em",
                        height: "1.5em",
                        textAlign: "center",
                    }}
                >
                    Meeskond
                </Typography>
                <Box sx={{ display: "flex", gap: "20px", marginBottom: "100px" }}>
                    {members.map((member) => (
                        <TeamMemberCard key={member} member={member} />
                    ))}
                </Box>
                <Typography
                    gutterBottom
                    variant="h4"
                    sx={{
                        marginTop: "3em",
                        marginBottom: "2em",
                        borderBottom: "2px solid #b38d66",
                        width: "14.5em",
                        height: "1.5em",
                        textAlign: "center",
                    }}
                >
                    Võta meiega ühendust
                </Typography>
                <ContactUsForm />
            </ContentContainer>
            <Footer />
        </>
    );
};

export default Contact;
