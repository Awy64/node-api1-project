import React, {useState} from "react";
import axios from "axios";


const AddUser = ({fetchUsers}) => {

  const [newUser, setNewUser] = useState({name: "", bio: ""})

  const handleChange = e => {
    setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/users/", newUser)
      .then(res => {
        console.log(res.message)
        fetchUsers();
      })
      .catch(err => console.log(err.message))
  }

  return(
    <div>
      <h1>Add New Users</h1>
      <form>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={newUser.name} />
        <textarea  name="bio" placeholder="bio" onChange={handleChange} value={newUser.bio} />
        <button onClick={handleSubmit} >Submit</button>
      </form>

    </div>
  )
}


export default AddUser;