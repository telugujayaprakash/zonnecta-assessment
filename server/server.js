const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jayaprakash:jayaprakash@assignment.qrx4h.mongodb.net/?retryWrites=true&w=majority&appName=Assignment").then(()=>{
    console.log("mongodb connected");
  }).catch(()=>{
    console.log('failed');
  })
const userSchema=new mongoose.Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})
const collection = mongoose.model("collection",userSchema)

app.post("/",async(req,res)=>{
    const{Email,Password}=req.body

    try{
        const check=await collection.findOne({Email:Email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/Signup",async(req,res)=>{
    const{Email,Password}=req.body

    const data={
        Email:Email,
        Password:Password
    }

    try{
        const check=await collection.findOne({Email:Email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(5000,()=>{
    console.log("port connected");
})