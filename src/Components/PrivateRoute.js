import {Outlet,Navigate} from 'react-router-dom';


const PrivateRoute=({username})=>{
    const auth="admin";
    console.log(username);
    return(
        
        auth===username ? <Outlet/> :<Navigate to="/"/>
    )
}
export default PrivateRoute;