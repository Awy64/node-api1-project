import React, {useState, useEffect} from "react";
import {axios as Axios} from "axios";



const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/users/")
    .then(res => console.log(res))
    .catch(err => console.log(err.message))
  }, [])
  

  return(
    <div>

    </div>
  )
}


export default UserList;