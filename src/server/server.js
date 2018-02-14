const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ users: 'OSCAR' })
})

app.get('/laptop', (req, res) => {
  res.json({ hello: 'OSCAR MARIO ARRIETA PINEDA' })
})

app.get('/users/:id', (req, res) => {
  const users = {
    14: 'Francisco',
    15: 'Jose',
    16: 'Maria'
  }
  res.json({ name: users[req.params.id] })
})

app.get('/companies', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: req.query.name })
})

<<<<<<< HEAD
=======
app.get('/brayan', (req, res) => {
  res.json({ name: 'Brayan', username: 'bingtrav'})
})

app.get('/myselfP/:name/:username', (req, res) => {
  res.json({ name: req.params.name, username: req.params.username})
})

app.get('/myselfQ', (req, res) => {
  res.json({ name: req.query.name, username: req.query.username})
})
>>>>>>> upstream/master

app.listen(3005, () => {
  console.log('Server running on port 3005')
})