import React, {useEffect} from "react";
import User from "./User";



const UserList = ({fetchUsers, users}) => {
 

  // const fetchUsers = () => {
  //   axios.get("http://localhost:5000/api/users/")
  //   .then(res => setUsers(res.data))
  //   .catch(err => console.log(err.message))
  // }

  useEffect(() => {
    fetchUsers();
  }, [])
  

  return(
    <div>
      {users.map((user, i) => {
        return(
        <div key={i}>
        <User  user={user} fetchUsers={fetchUsers} />
        </div>
        )
        
      })}
    </div>
  )
}


export default UserList;