import mongoose from "mongoose";

const schema = new mongoose.Schema({
    favourite:{
        type:Array,
        require:true
    }
})

const dashboard = mongoose.model("dashboard" , schema)

export default  dashboard