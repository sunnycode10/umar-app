const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>")
})

const port = process.env.PORT || 2090 

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})