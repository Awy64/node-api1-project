const express = require('express');
const shortid = require('shortid');
const cors = require('cors');

const server = express();


// data stores
let users = [];
//

// Created json from text json
server.use(express.json());
const corsSettings = {
  origin: false
}
server.use(cors(corsSettings))
//

// User endpoints

// Create
server.post('/api/users', (req, res) => {
  const newUser = req.body;
  newUser.id = shortid.generate();

  try {
    if (newUser.name && newUser.bio) {

    users.push(newUser);

    res.status(201).json(newUser);
    }else {
      res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    }
  }catch{
    res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
  }
})

// Read
server.get('/api/users', (req, res) => {
  try {
    res.status(200).json(users)
  }catch {
    res.status(500).json({errorMessage: "The users information could not be retrieved."})
  }
  
})

server.get('/api/users/:id', (req, res) => {
  const {id} = req.params;
  const found = users.find(user => user.id === id)

  try {
    if (found) {
    res.status(200).json(found)
  }else {
    res.status(404).json({message: "The user with the specified ID does not exist."})
  }
  }catch{
    res.status(500).json({errorMessage: "The user information could not be retrieved."})
  }
  
})

server.delete('/api/users/:id', (req, res) => {
  const {id} = req.params;
  const found = users.find(user => user.id === id)

  try {
    if (found) {
    users = users.filter(user => user.id !== id)
    res.status(200).json(found);
  }else {
    res.status(404).json({message: "The user with the specified ID does not exist."})
  }
  }catch{
    res.status(500).json({errorMessage: "The user could not be removed"})
  }
  
})

server.put('/api/users/:id', (req, res) => {
  const {id} = req.params;
  const changes = req.body;
  let index = users.findIndex(user => user.id === id);

  try {
    if (index !== -1 && changes.name && changes.bio) {
    changes.id = id;
    users[index] = changes;
    res.status(200).json(users[index]);
  }else {
    res.status(404).json({message: "The user with the specified ID does not exist."})
  }
  }catch{
    res.status(500).json({errorMessage: "The user information could not be removed."})
  }
  
})




const PORT = 5000;
server.listen(PORT, () => {
  console.log('listening on localhost', PORT)
})
