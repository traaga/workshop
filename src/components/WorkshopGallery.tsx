import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import useWindowDimensions from "../other/useWindowDimensions";

const WorkshopGallery = () => {
    const { width } = useWindowDimensions();

    return (
        <Card elevation={0} sx={{ maxWidth: width > 500 ? 345 : "80%", marginBottom: "100px" }}>
            <CardMedia
                component="img"
                image="images/aken.jpg"
                alt="aken"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Aken
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Aken on hoone, sõiduki või muu objekti seinas, katuses või ukses paiknev ava, mis tavaliselt võimaldab lasta sisse valgust ja õhku.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default WorkshopGallery;
