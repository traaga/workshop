import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useWindowDimensions from "../other/useWindowDimensions";

interface Price {
    description: string,
    details?: string,
    price: string
}

//const PriceList = (priceList: Price[]) => {
const PriceList = () => {

    const { width } = useWindowDimensions();

    let realWidth = "40vw";

    if (width < 1400) {
        if (width < 700) {
            realWidth = "80vw";
        } else {
            realWidth = "60vw";
        }
    }

    const priceList: Price[] = [
        {
            description: "1 tund töökojas",
            details: "Seehulgas töölaud ning juhendaja",
            price: "10€"
        },
        {
            description: "5 tundi ehk üks õhtu",
            details: "Seehulgas töölaud ning juhendaja",
            price: "35€"
        },
        {
            description: "5 korda ehk 25 tundi",
            details: "Seehulgas töölaud ning juhendaja",
            price: "130€"
        },
        {
            description: "10 korda ehk 50 tundi",
            details: "Seehulgas töölaud ning juhendaja",
            price: "250€"
        },
        {
            description: "Tööriista hooldamata jätmine",
            details: "Kui kohapeal kasutatud tööriist teritamata jäetakse",
            price: "5€"
        },
        {
            description: "Töökoha koristamata jätmine",
            price: "10€"
        },
        {
            description: "Tahtlik hooletus",
            details: "Hind sõltuvalt remondikuludest",
            price: "€€"
        },
        {
            description: "Nõustamine",
            details: "Ühekordne ning lisandub 0.35€ km",
            price: "40€"
        },
        {
            description: "Meistri töötund",
            details: "Juhendamine, töö teostamine, muud tegevused",
            price: "12€"
        },
        {
            description: "Tööriistade rent kohapeal eraldi hinnakirja alusel!",
            price: "€€"
        },
    ]

    return (
        <Box width={realWidth} sx={{ marginBottom: "100px" }}>
            <TableContainer component={Paper} elevation={0}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: "600"}}>Selgitus</TableCell>
                            <TableCell sx={{fontWeight: "600"}} align="right">Hind</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {priceList.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box sx={{fontWeight: "500"}}>{row.description}</Box>
                                    <Box sx={{fontSize: "0.75rem", fontStyle: "italic", lineHeight: 1.8}}>{row.details}</Box>
                                </TableCell>
                                <TableCell sx={{fontWeight: "500"}} align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PriceList;
