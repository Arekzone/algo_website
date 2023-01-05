import Header2 from "../../ComponentyAdmin/Header2";
import {Box} from "@mui/material";

function Dashboard(){

    return (
        <Box m="10px">
            <Box display="flex" justifyContent = "space-between" alignItem="center">
        <Header2 title="DASHBOARD" subtitle="Welcome to your dashboard"/>
        </Box>
        </Box>
    )

}
export default Dashboard;