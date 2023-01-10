import axios from "axios";
import {useState ,useEffect} from "react";
import api from "../api/posts";

function Users(){
    const [users,setUsers] = useState();
  


    useEffect(()=>{
        let isMounted = true;
        const controller = new AbortController();
        const getUsers = async()=>{
            try{
                const response = await api.get('/admin/users',{
                    signal:controller.signal
                })
                console.log(response.data);
                isMounted && setUsers(response.data);
            }catch(err){
                console.log(err);
            }
        }
        getUsers();
        return()=>{
            isMounted = false;
            controller.abort();
        }
},[])

    return(
        <article>
            <h2>Users List</h2>
            {users?.length
            ?(
                <ul>
                    {users.map((user,i)=><li key={i}>{user?.username}</li>)}
                </ul>
            )  : <p>No users to display</p>
            }
           
            <br/>
        </article>

    )
}

export default Users;
