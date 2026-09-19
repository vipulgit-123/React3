const connectToMongo = require('./db')

connectToMongo()
const express = require('express');
const app = express()
const port = 5000

//middleware
app.use(express.json()) //if u want to use req.body then we have to use this middleware

// Available routes----
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})