// Levantar el server con nodemon en index, para asi poder usar la API !
require('./db/mongoose')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const Project = require('./model/projects')

app.use(express.json())

// Read -- Mostrar todos los proyectos
app.get('/projects', (req, res) => {
  Project.find()
    .then((result) => {
      res.set('Access-Control-Allow-Origin', '*')
      res.send(result)
    })
    .catch((err) => res.status(404).send(err))
})

// Get 1 project by ID:
app.get('/projects/:id', (req, res) => {
  const id = req.params.id
  Project.findById(id)
    .then((result) => {
      res.set('Access-Control-Allow-Origin', '*')
      res.send(result)
    })
    .catch((err) => res.status(404).send(err))
})

// Create -- Agregar Proyectos a la DB
app.post('/project', (req, res) => {
  const project = new Project(req.body)
  project
    .save()
    .then(() => {
      res.status(201).send(dish)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

app.listen(port, () => {
  console.log(`Funcionando en http://localhost:${port}`)
})
