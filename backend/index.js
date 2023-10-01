const express = require("express");

const app = express();


app.use(express.json())

app.use(express.urlencoded({extended:true}));


app.listen(8080,(req,res)=>{
    console.log({msg:"server is running on port 8080"})
})