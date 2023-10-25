import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    companyEmail:{
        type:String,
        require:true
    }
   
})

let userData =  mongoose.model("userData" , userSchema)

export default userData