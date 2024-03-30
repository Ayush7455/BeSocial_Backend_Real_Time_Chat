const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
})
mongoose.model("User",userSchema)