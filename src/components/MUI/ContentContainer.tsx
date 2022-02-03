import { Box, Theme, SxProps } from "@mui/material";

interface ContentContainerProps {
    sx?: SxProps<Theme> | undefined;
}

//  const Square: React.FC<SquareProps> = props => (
//    <div style={{ backgroundColor: props.color }}>{props.children}</div>
//  );

const ContentContainer: React.FC<ContentContainerProps> = (props) => (
    <>
        <Box id="content" sx={props.sx}>
            {props.children}
        </Box>
    </>
);

export default ContentContainer;
