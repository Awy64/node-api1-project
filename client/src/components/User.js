import React, {useState} from "react";
import axios from "axios";


const User = ({user, fetchUsers}) => {
  const [editing, setEditing] = useState(false)
  const [edit, setEdit] = useState({name: user.name, bio: user.bio})

  const handleDelete = e => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/users/${user.id}`)
    .then(res => {
      console.log(res)
      fetchUsers();
    })
    .catch(err => console.log(err.message))
  }

  const handleChange = e => {
    setEdit({...edit, [e.target.name]: e.target.value})
  }

  const handleEdit = e => {
    e.preventDefault()
    setEditing(false)
    axios.put(`http://localhost:5000/api/users/${user.id}`, edit)
      .then(res => {console.log(res); fetchUsers();})
      .catch(err => console.log(err.message))
  }

  return(
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <button onClick={handleDelete} >Delete</button>
      <button onClick={() => setEditing(!editing)} >Edit</button>
      {editing &&
        <form>
        <input name="name" onChange={handleChange} value={edit.name} />
        <textarea name="bio" onChange={handleChange} value={edit.bio} />
        <button onClick={handleEdit} >Submit</button>
      </form>
      }
    </div>
  )
}

export default User;