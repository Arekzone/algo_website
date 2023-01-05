import {useState,useContext} from "react";
import {ProSidebar,Menu,MenuItem} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {Box,IconButton,Typography,useTheme} from "@mui/material";
import{Link} from "react-router-dom";
import{tokens} from "../../theme";
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


function Sidebar(){
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
       
        
            <ProSidebar collapsed={isCollapsed}>
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
                <Typography variant="h3" color={colors.grey[100]}>
                  PANEL ADMINA
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
                            src={`../../assets/cos tam.png`}
                            style={{cursor:"pointer",borderRadius:"50%"}}
                            />
                        </Box>
                    <Box>
                        <Typography variant = "h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 10px 60px"}}>Arek</Typography>
                        <Typography variant ="h5" color={colors.greenAccent[500]} sx={{m: "10px 0 10px 70px"}}>Admin</Typography>
                    </Box>
                    </Box>
                )}

                    {/* Menu items */}
                    <Box paddingLeft={isCollapsed? undefined:"10px"}>
                        <Item 
                        title="Menu"
                        to="/dashboard"
                        icon={<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                         variant="h6"
                         colors = {colors.grey[300]}
                         sx={{m:"15px 0 5px 20px"}}
                        >Data</Typography>
                        <Item 
                        title="Team"
                        to="/team"
                        icon={<PeopleOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Kontakt"
                        to="/contacts"
                        icon={<ContactsOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Salda"
                        to="/invoices"
                        icon={<ReceiptOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                         variant="h6"
                         colors = {colors.grey[300]}
                         sx={{m:"15px 0 5px 20px"}}
                        >Pages</Typography>
                        <Item 
                        title="Formularze"
                        to="/form"
                        icon={<PersonOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Kalendarz"
                        to="/calendar"
                        icon={<CalendarTodayOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="FAQ"
                        to="/faq"
                        icon={<HelpOutlineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                         variant="h6"
                         colors = {colors.grey[300]}
                         sx={{m:"15px 0 5px 20px"}}
                        >Wykresy</Typography>
                        <Item 
                        title="Diagram Słupkowy "
                        to="/bar"
                        icon={<BarChartOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Item 
                        title="Diagram Kołowy"
                        to="/pie"
                        icon={<BarChartOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Wykres liniowy"
                        to="/line"
                        icon={<TimelineOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item 
                        title="Mapa"
                        to="/geography"
                        icon={<MapOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
          </Menu>
          </ProSidebar>
          </Box>
        

    );
}
export default Sidebar;