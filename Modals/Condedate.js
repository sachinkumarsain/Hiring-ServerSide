import mongoose from "mongoose";

const schema = new mongoose.Schema({

    fullname: {
        type: String,
        require: true
    }
    , course: {
        type: Array,
        require: true
    }, email: {
        type: String,
        require: true,
        unique: true,
    }, address: {
        type: String,
        require: true
    }, mobile: {
        type: Number,
        require: true
    }, linkedin: {
        type: String,
        require: true
    }, github: {
        type: String,
        require: true
    }, summary: {
        type: String,
        require: true
    },
    profilePic:{
        type:String,
        require:true
    }
    ,
    Graduation: {
        startYear: {
               type:String,
            required:true
        },
        lastYear: {
            type:String,
            required:true
        },
        location: {
            type:String,
            required:true
        },
        degree: {
            type:String,
            required:true
        },
        university: {
            type:String,
            required:true
        },
        decripation: {
            type:String,
            required:true
        },
        skills: {
            type:String,
            required:true
        }
    }
    ,
    
    Intership: {
        startTime: {
            type:String,
            required:true
        },
        completeTime: {
            type:String,
            required:true
        },
        location: {
            type:String,
            required:true
        },
        degree: {
            type:String,
            required:true
        },
        institute: {
            type:String,
            required:true
        },
        decripation: {
            type:String,
            required:true
        },
        skills: {
            type:String,
            required:true
        }
    }
    ,
     skills: {
        type: String,
        require: true
    },
    lanuages: {
        type: String,
        require: true
    }

})

const condedate = mongoose.model("condedate", schema);

export default condedate ;           