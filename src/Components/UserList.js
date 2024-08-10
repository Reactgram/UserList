import React,{useState, useEffect} from "react";
import axios from "axios";


const UserList = () => {
    const [users, setUsers] = useState([]);

    console.log(users)

     useEffect(()=>{
        getUsers()
     },[])

    function getUsers() {
        axios.get("https://reqres.in/api/users")
        .then(res => setUsers(res.data.data))
        .catch(err => console.log(err.response.data));
    }
   
 
    return(
        <div>
            <h1>Users List</h1>
            {/* <button onClick={getUsers}>Get Users List</button> */}
            
            <table style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>
                </thead>

                {/* {users.length == 0 && (<tr> 
                    <td colSpan={4}> No Data Found to Display </td> 
                    </tr>) 
                } */}
                 
                <tbody>
                     {
                        users.length == 0? (<tr> 
                            <td colSpan={4}> No Data Found to Display </td> 
                            </tr>)      :  (
                             users.map(user => (
                                <tr key={user.id}>
                                        <td> {user.first_name} </td>
                                        <td> {user.last_name} </td>
                                        <td> {user.email} </td>
                                        <td> <img src={user.avatar} alt={`${user.first_name} ${user.last_name} `} /> </td>
                                </tr>
                             ))
                        )
                     }
                </tbody>
            </table>
                
            
        </div>
    )
  
}

export default UserList;