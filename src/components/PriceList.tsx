import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import useWindowDimensions from "../other/useWindowDimensions";

interface Price {
    id: string,
    description: string,
    details?: string,
    price: string
}

//const PriceList = (priceList: Price[]) => {
const PriceList = () => {

    const { width } = useWindowDimensions();

    let realWidth = "50vw";

    if (width < 770) {
        if (width < 515) {
            realWidth = "80vw";
        } else {
            realWidth = "75vw";
        }
    }

    /*
        • 1 tund töökojas- 10€ (sh töölaud ning juhendaja)
        • 5 tundi ehk üks õhtu 35€ (sh töölaud ning juhendaja)
        • Tööriista hooldamat jätmine- 5€ (kui kohapeal kasutatud tööriist teritamata jäetakse)
        • Töökoha koristamata jätmine- 10€
        • Tahtlik hooletus- sõltuvalt remondikuludest
        • Nõustamine- 40€ kord+0.33€ km
     */

    const priceList: Price[] = [
        {
            id: "1",
            description: "1 tund töökojas",
            details: "Seehulgas töölaud ning juhendaja",
            price: "10€"
        },
        {
            id: "2",
            description: "5 tundi ehk üks õhtu",
            details: "Seehulgas töölaud ning juhendaja",
            price: "35€"
        },
        {
            id: "3",
            description: "Tööriista hooldamata jätmine",
            details: "Kui kohapeal kasutatud tööriist teritamata jäetakse",
            price: "5€"
        },
        {
            id: "4",
            description: "Töökoha koristamata jätmine",
            price: "10€"
        },
        {
            id: "5",
            description: "Tahtlik hooletus",
            details: "Hind sõltuvalt remondikuludest",
            price: "€€"
        },
        {
            id: "6",
            description: "Nõustamine",
            details: "Ühekordne ning lisandub 0.33€ km",
            price: "40€"
        },
    ]

    return (
        <Box width={realWidth} sx={{ marginBottom: "100px" }}>
            <TableContainer component={Paper} elevation={0}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width="200px">Selgitus</TableCell>
                            <TableCell align="right">Hind</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {priceList.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                        {row.description}
                                        {row.details &&
                                            <>
                                                {width < 600 ?
                                                    <Tooltip title={row.details} placement="top" enterTouchDelay={100}
                                                             leaveTouchDelay={2000}>
                                                        <InfoIcon sx={{ fontSize: 16, color: "#b5b5b5" }}/>
                                                    </Tooltip> :
                                                    <Tooltip title={row.details} placement="right">
                                                        <InfoIcon sx={{ fontSize: 16, color: "#b5b5b5" }}/>
                                                    </Tooltip>
                                                }
                                            </>
                                        }
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PriceList;
