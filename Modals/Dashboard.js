import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    favourite:{
        type:Array,
    
    },
    showCondedate:{
        type:Array
    }
})

const dashboard = mongoose.model("dashboard" , schema)

export default  dashboard