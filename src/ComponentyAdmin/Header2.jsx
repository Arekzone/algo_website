import { Typography,Box,useTheme } from "@mui/material";
import {tokens} from "../scenes/theme";
function Header2({title,subtitle}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box mb="30px">
            <Typography variant ="h2" color={colors.grey[100]} fontWeight = "bold" sx={{mb: 2}}>{title}</Typography>
            <Typography variant ="h5" color={colors.greenAccent[600]}>{subtitle}</Typography>
        </Box>
    )
}
export default Header2;