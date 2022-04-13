import { useContext } from "react";
import NavigationBar from "../components/NavigationBar";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";
import TeamMemberCard from "../components/TeamMemberCard";
import ContactUsForm from "../components/ContactUsForm";
import { Typography } from "@mui/material";
import { GlobalStateContext } from "../state/GlobalStateContext";
import { Box } from "@mui/system";
import useWindowDimensions from "../hooks/useWindowDimensions";

const members = [
    {
        name: "Edrin Hansen",
        avatar: "Edrin2.jpg",
        text: "Edrin on meeskonna mootor, hoiab kõigel kätt pulsil ja veendub, et kõigil oleks asjad õigeks ajaks" +
            " tehtud. Edrini roll on organiseerida meie tegevusi ning jagada töökorraldusi. Ta on väga täpne ja " +
            "entusiastlik ning jõuab üksi ära teha mitme mehe töö. Töökojas oskab anda põhjaliku ja tarka nõu " +
            "akende ja uste restaureerimisel ning saviehituse ja krohvi teemadel.",
    },
    {
        name: "Kermo Aasmäe",
        avatar: "Kermo2.jpg",
        text: "Kermo hoolitseb terava pilguga, meie töökoja rahaasjade ning meeleolu eest. Temal jutt jookseb ja" +
            " ega see nii pea otsa ei saa. Meie seast on ta kõige pikema ja suurema töökogemusega kiviehituse ja" +
            " viimistlustööde osas. Tema poole võib alati oma ehitusalase küsimuse ja murega pöörduda ja" +
            " saad kindla ning põhjaliku vastuse."
    },
    {
        name: "Joosep Mattis Eriste",
        avatar: "Joosep.jpg",
        text: "Joosep on küll läbinisti palgimees, kuid hea suhtleja. Töökojas saab Joosepi käest vastuse " +
            "kõikidele küsimustele seoses palkehitusega ning metsandusega. Joosep on sammuti osav muusik " +
            "ning jagab ka oma teadmisi noortele, keda ta pilli õpetab mängima."
    },
    {
        name: "Raimond Russi",
        avatar: "Raimond2.jpg",
        text: "Raimond on meie sotsiaalmeedia haldur, kes vajadusel remondib ära ka teie auto ning vahetab majal " +
            "mädanenud palgi. Raimond on igati mitmekülgne ja kirgas noormees, kellel on palju hobisid (autod- " +
            "eriti Saab, kaitseliit, videomängud ja reisimine). Kuid teise poole elust moodustavad erialased " +
            "tegemised, millest lõviosa ajast kulub õpingutele TÜ VKA rahvusliku ehituse erialal ning aeg-ajalt " +
            "Norras tööl käimine (palgivahetus)"
    }
];

members.sort(() => Math.random() - 0.5);

const Contact = () => {
    const { titleFull } = useContext(GlobalStateContext);
    document.title = "Kontakt | " + titleFull;
    const { width } = useWindowDimensions();

    return (
        <>
            <NavigationBar/>
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
                    width={width > 696 ? "8em" : "auto"}
                    sx={{
                        marginTop: "2em",
                        marginBottom: "2em",
                        borderBottom: "2px solid #D9D9D9",
                        height: "1.5em",
                        textAlign: "center",
                    }}
                >
                    Meeskond
                </Typography>
                <Box sx={{
                    display: "flex",
                    gap: "30px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    margin: "0 25px 100px 25px"
                }}>
                    {members.map((member) => (
                        <TeamMemberCard
                            key={member.name}
                            name={member.name}
                            text={member.text}
                            avatar={member.avatar}
                        />
                    ))}
                </Box>
                {width > 500 ?
                    <Typography
                        gutterBottom
                        variant="h4"
                        width={width > 696 ? "14.5em" : "auto"}
                        sx={{
                            marginTop: "3em",
                            marginBottom: "2em",
                            borderBottom: "2px solid #D9D9D9",
                            height: "1.5em",
                            textAlign: "center",
                        }}
                    >
                        Võta meiega ühendust
                    </Typography>
                    :
                    <>
                        <Typography
                            gutterBottom
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                margin: "0",
                                marginTop: "3em",
                            }}
                        >
                            Võta meiega
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h4"
                            sx={{
                                textAlign: "center",
                                borderBottom: "2px solid #D9D9D9",
                                marginBottom: "2em",
                                height: "1.5em",
                                width: "6em",
                            }}
                        >
                            ühendust
                        </Typography>
                    </>
                }
                <ContactUsForm/>
            </ContentContainer>
            <Footer/>
        </>
    );
};

export default Contact;
