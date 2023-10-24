import mongoose from "mongoose";

const schema = new mongoose.Schema({
    
fullname :{
    type:String,
    require:true
},
profilePic:{
    type:String,
    require:true
}
,course :{
    type:String,
    require:true
},email :{
    type:String,
    require:true
},address :{
    type:String,
    require:true
},mobile :{
    type:Number,
    require:true
},linkedin :{
    type:String,
    require:true
},github :{
    type:String,
    require:true
},summary :{
    type:String,
    require:true
},skills :{
    type:String,
    require:true
},
lanuages :{
    type:String,
    require:true
}

})

const condedate = mongoose.model("condedate", schema);


export default condedate;