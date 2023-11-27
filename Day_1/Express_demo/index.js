const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res) =>
    res.send('Hello World \nSANJEEVIKUMAR - 7376222AL192'))

app.listen(PORT,() => console.log('Example app listening at http://localhost:${PORT}'))