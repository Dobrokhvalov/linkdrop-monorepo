<<<<<<< HEAD
=======
import { terminal as term } from 'terminal-kit'
import configs from '../configs'

>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const claimController = require('./controllers/claimController')
<<<<<<< HEAD
const path = require('path')
const configPath = path.resolve(__dirname, '../config/server.config.json')
const config = require(configPath)
=======

const config = configs.get('server')

>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
const { mongoURI } = config

// Apply middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Set up default mongoose connection
<<<<<<< HEAD
mongoose.connect(
  mongoURI || 'mongodb://localhost:27017/linkdrop_db',
  { useNewUrlParser: true, useCreateIndex: true }
)

// Bind connection to error event (to get notification of connection errors)
mongoose.connection.on(
  'error',
  console.error.bind(console, '📛  MongoDB connection error:')
)

// Run server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Running server on port ${PORT}`))
=======
mongoose
  .connect(
    mongoURI || 'mongodb://localhost:27017/linkdrop_db',
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => {
    // Run server
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => {
      term.green.bold(`Server is up on port ${PORT}\n`)
    })
  })
  .catch(err => {
    term.red.bold(`${err}\n`)
    process.exit(1)
  })
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444

// Define routes
app.get('/', (req, res) => res.send('👋  Hello from linkdrop server'))
app.post('/api/v1/linkdrops/claim', claimController.claim)
app.post('/api/v1/linkdrops/claim-erc721', claimController.claimERC721)
