const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>")
})

app.listen(5080, ()=>{
    console.log("server running on port 5080")
})