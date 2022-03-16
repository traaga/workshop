import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    IconButton,
    Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

interface TeamMember {
    name: string;
    role?: string;
    text: string;
    avatar: string;
}

const TeamMemberCard = ({name, role, text, avatar}: TeamMember) => {
    return (
        <>
            <Card sx={{ maxWidth: 300, backgroundColor: "white", boxShadow: "0" }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={"images/" + avatar}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        height: "280px"
                    }}
                >
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                    >
                        {role}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "justify", margin: "0 16px" }}
                    >
                        {text}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "16px",
                        padding: "0",
                    }}
                >
                    <IconButton>
                        <FacebookIcon
                            fontSize="large"
                            sx={{ color: "#4c4c4c" }}
                        />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon
                            fontSize="large"
                            sx={{ color: "#4c4c4c" }}
                        />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon
                            fontSize="large"
                            sx={{ color: "#4c4c4c" }}
                        />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default TeamMemberCard;
