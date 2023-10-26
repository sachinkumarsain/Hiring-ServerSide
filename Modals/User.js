import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    companyEmail:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
   
})

let userData =  mongoose.model("userData" , userSchema)

export default userData