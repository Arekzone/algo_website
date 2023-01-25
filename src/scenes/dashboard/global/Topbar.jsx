import {Box,IconButton,useTheme} from "@mui/material";
import {useContext} from "react";
import { ColorModeContext,tokens } from '../../theme.js';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";



function Topbar(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    return (
    <Box display="flex" justifyContent="space-between" p={5} sx={{ml: 250}}>
        
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode==='dark'?(
        <DarkModeOutlinedIcon/>
            ):(<LightModeOutlinedIcon/>)}
        </IconButton>
        </Box>
    
    )
}
export default Topbar;