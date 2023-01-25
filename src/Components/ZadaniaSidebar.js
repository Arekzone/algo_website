import { RectangleRounded } from '@mui/icons-material';
import { Sidebar, Nav, NavItem, Button, CardText,Card } from 'reactstrap';

import {useState,useContext} from "react";
import {ProSidebar,Menu,MenuItem} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {Box,IconButton,Typography,useTheme} from "@mui/material";
import{Link} from "react-router-dom";
import{tokens} from "../scenes/theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import logo from "../assets/logowieksze.png";


const Item=({title,to,icon,selected,setSelected})=>{
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);
    return(
        <MenuItem active={selected===title} style={{color:colors.grey[100]}} onCLick={()=>setSelected(title)} icon={icon}>
        <Typography>{title}</Typography>
        <Link to={to}/>
        </MenuItem>
    )
}


function ZadaniaSidebar({zadania}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const[isCollapsed,setIsCollapsed]=useState(false);
    const[selected,setSelected]=useState("Dashboard");

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
              background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
              backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
              padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
              color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
              color: "#6870fa !important",
            },
          }}
        > 
       
        
            <ProSidebar collapsed={isCollapsed} style={{position:'absolute'}}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[100]}>
                  Zwiń
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
                {!isCollapsed &&(
                    <Box mb="25px">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src={logo}
                            style={{cursor:"pointer",borderRadius:"50%"}}
                            />
                        </Box>
                    <Box>
                        <Typography variant = "h4" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 10px 50px"}}>Kategorie</Typography>
                        <Typography variant ="h5" color={colors.greenAccent[500]} sx={{m: "10px 0 10px 20px"}}>Wybierz kategorie</Typography>
                    </Box>
                    </Box>
                )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed? undefined:"10px"}>
                    
                          <Typography
                         variant="h6"
                         colors = {colors.grey[300]}
                         sx={{m:"15px 0 5px 10px"}}
                        >Przejdź do zadań</Typography>
                        <Item 
                        title="Wszystkie"
                        to="/zadania"
                        icon={<PeopleOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Tablice"
                        to="/tablice"
                        icon={<ContactsOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Tablice 2-D"
                        to="/tablicedwu"
                        icon={<ReceiptOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Dynamiczne"
                        to="/dynamiczne"
                        icon={<TimelineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Strings"
                        to="/strings"
                        icon={<CalendarTodayOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Sortowanie"
                        to="/sortowanie"
                        icon={<HelpOutlineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Rekurencja"
                        to="/rekurencja"
                        icon={<BarChartOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
          </Menu>
          </ProSidebar>
          </Box>
        

    );
}
export default ZadaniaSidebar;