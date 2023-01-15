import { useEffect } from 'react';
import {React, Component, useState} from 'react';
import {Card,CardBody} from 'reactstrap';
import apiRequest from '../api/apiRequest.js';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';

import DodajZadanie from './DodajZadanie.js';
import { ColorModeContext,useMode } from '../scenes/theme.js';
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from '../scenes/dashboard/global/Topbar.jsx';
import Sidebar from '../scenes/dashboard/global/Sidebar.jsx';
import Dashboard from '../scenes/dashboard/index.jsx';
import { BrowserRouter, Route,Routes,useLocation} from 'react-router-dom';
import {Grid} from "@mui/material";
import ZadaniaForm from './ZadaniaForm.js';
import AllUsers from './AllUsers.js';
import Wykres from './Wykres.js';
import api from "../api/posts.js";
import { ConstructionOutlined } from '@mui/icons-material';


// import Dashboard from '../scenes/dashboard/index.jsx';
// import Team from '../scenes/Team';
// import Invoices from '../scenes/Invoices';
// import Contacts from '../scenes/contacts';
// import Bar from '../scenes/bar';
// import Form from '../scenes/form';
// import Line from '../scenes/line';
// import Pie from '../scenes/pie';
// import FAQ from '../scenes/faq';
// import Geography from '../scenes/geography';
// import Calendar from '../scenes/calendar';


function PanelAdmina({kategorie}){
    const [theme,colorMode]=useMode();
    const [isSidebar, setIsSidebar] = useState(true);


    const mystyle = {
        width: "500px",
  height: "150px",
  padding: "12px 20px",
  border: "2px solid #ccc",
  backgroundColor: "#f8f8f8",
  fontSize: "16px",
  resize: "none",
      }
     

  


     

        return(
             <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/> 
            <Grid container>
                <Grid item xs={3}> 
                 <Sidebar isSidebar={isSidebar} />
                 </Grid>
                 <Grid item xs={9}>
                 <Topbar setIsSidebar={setIsSidebar} />
                 <Dashboard/>
                 <Grid id="top-row" container spacing={50}>
                 <Grid item xs={4}>
                    <ZadaniaForm/>
                    </Grid>
                    <Grid item xs={7}>
                    <AllUsers/>
                    <Wykres/>
                    </Grid>
                    </Grid>
                    </Grid>
            </Grid>
            </ThemeProvider>
      </ColorModeContext.Provider> 
        
            
        )
        
    

        }

export default PanelAdmina;