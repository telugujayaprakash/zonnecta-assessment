const mongoose=require("mongoose")


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

module.exports=collection