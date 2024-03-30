const mongoose=require("mongoose")
const messagesSchema=new mongoose.Schema({
    room:{
        type:String,
        required:true,
        unique:true
    },
   messages:{
    type:Array,
    default:[]
   }
})
mongoose.model("Messages",messagesSchema)