import { useState, useEffect, React } from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";
import { Link,Router } from 'react-router-dom';
import {Grid} from '@mui/material';
import Users from "./Users";
import api from "../api/posts";
import { RepeatOneSharp } from "@mui/icons-material";
import SidebarZadania from "./SidebarZadania.js";
import ZadaniaForm from "../ComponentyAdmin/ZadaniaForm";
import ZadaniaSidebar from "./ZadaniaSidebar";
import Sidebar from "../scenes/dashboard/global/Sidebar";
import { RectangleRounded } from '@mui/icons-material';
import { Nav, NavItem, Button, CardText, Row, Col } from 'reactstrap';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../scenes/theme";
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
import '../assets/StronaGlowna.css';



function Zadania({ zadania }) {
    const [user, setUser] = useState([]);
    const [zrobioneZadania, setZrobioneZadania] = useState([602]);
    const [tablice, setTablice] = useState("");



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/auth/me', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setUser(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    const showSite = zadania.map((zadanie) => {
        return (<Link to={`/zadania/${zadanie.id}`}></Link>)
    })



    const showitems = zadania.map((zadanie, showSite) => {
        return (
            <Card className="my-2 justify-content-center"
                color="secondary"
                body
                key={zadanie.id} style={{ backgroundColor: zrobioneZadania.includes(zadanie.id) ? "green" : "secondary" }} >
                <Link to={`/zadania/${zadanie.id}`} style={{ textDecoration: 'none' }}>
                    <CardBody tag="h3">{zadanie.nazwaZadania}</CardBody>
                </Link>
                <CardBody tag="h5">kategoria: {zadanie.kategoria}</CardBody>
            </Card>
        );
    });
    return (
        <div>
            
            <Container>
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Typography variant="h5" align="center">Kliknij na zadanie aby do niego przejść</Typography>
    </div>
    <Row>
        <Col xs="8" sm="4">
            <ZadaniaSidebar />
        </Col>
        <Col xs="4" sm="8">
    <Grid container spacing={3}>
        <Grid item xs={6}>
            {showitems[2]}
            {showitems[4]}
            {showitems[6]}
            {showitems[8]}
            {showitems[10]}
            {showitems[0]}
        </Grid>
        <Grid item xs={6}>
        {showitems[5]}
            {showitems[1]}
            {showitems[3]}
            {showitems[7]}
            {showitems[9]}
            {showitems[11]}
        </Grid>
        &nbsp;
    </Grid>
    &nbsp;
    &nbsp;
    &nbsp;
</Col>
    </Row>
</Container>
        </div>
    )
}
export default Zadania;