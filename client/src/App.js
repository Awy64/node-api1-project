import React, {useState} from 'react';
import './App.css';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios.get("http://localhost:5000/api/users/")
    .then(res => setUsers(res.data))
    .catch(err => console.log(err.message))
  }

  return (
    <div className="App">
      <AddUser fetchUsers={fetchUsers}/>
      <UserList fetchUsers={fetchUsers} users={users} />
    </div>
  );
}

export default App;
