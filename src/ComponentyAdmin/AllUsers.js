import {useState,useEffect} from "react";
import axios from "axios";
import api from "../api/posts";
import { SettingsInputCompositeSharp } from "@mui/icons-material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header2 from "./Header2";
import { Box,Typography,useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {tokens} from "../scenes/theme";

function AllUsers(){
    const[users,setUsers]=useState([])
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns =[{
        field: "id",
        headerName:"ID",
    },{field:"username",headerName:"username",flex:0,cellClassName: "name-column"},{field:"email", headerName:"email",flex: 0},
        {field:"firstName", headerName:"firstName"},{field:"lastName",headerName:"lastName"}];

    useEffect(()=>{
        const fetchUsers=async()=>{
        try{
            const response = await api.get('/admin/users');
            setUsers(response.data);
        }catch(err){
           if(err.reponse) {
            console.log(err.response.status);
           }
         }
    
    }
    fetchUsers();
},[])

    return(
        <Box m="10px">
            <Header2 title = "Users" subtitle="All users"/>
            <Box sx={{ height: 400, width: '50%' }}>
            <DataGrid
                rows={users}
                columns={columns}
            />
            </Box>
        </Box>
    )
}


export default AllUsers;
