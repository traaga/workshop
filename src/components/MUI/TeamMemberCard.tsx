import {
    Card,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

interface TeamMemberCardProps {
    member: string;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
    return (
        <>
            <Card sx={{ maxWidth: 300 }}>
                <CardContent
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <Avatar
                        sx={{
                            width: "192px",
                            height: "192px",
                            margin: "38px 0",
                        }}
                        src="images/profile.jpg"
                    />
                    <Typography gutterBottom variant="h6" component="div">
                        {member}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                    >
                        Vastutav roll
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "justify", margin: "0 16px" }}
                    >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "16px",
                    }}
                >
                    <IconButton>
                        <FacebookIcon
                            fontSize="large"
                            sx={{ color: "#b38d66" }}
                        />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon
                            fontSize="large"
                            sx={{ color: "#b38d66" }}
                        />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon
                            fontSize="large"
                            sx={{ color: "#b38d66" }}
                        />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default TeamMemberCard;
