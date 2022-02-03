import { Box } from "@mui/material";

const ContentContainer: React.FC = ({ children }) => {
    return (
        <>
            <Box
                id="content"
                sx={{
                    minHeight: "calc(100vh - 64px - 270px)",
                }}
            >
                {children}
            </Box>
        </>
    );
};

export default ContentContainer;
