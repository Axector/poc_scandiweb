require('dotenv').config()
const React = require('react')
const express = require('express')
const router = require('./routes/index')

const PORT = process.env.PORT || 5000

const app = express()
app.use('/api', router)
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
