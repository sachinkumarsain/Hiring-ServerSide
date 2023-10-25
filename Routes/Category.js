import express, { Router } from "express"

//.............import file...................//

import condedate from "../Modals/Condedate.js"

const categoryRouter = express.Router();


categoryRouter.post("/category" ,async(req,res)=>{
    const courseName= req.body.course

//..............find total books and filter books............//

if(courseName!==0){
    let totalCondedate= await condedate.find({});
    let filterCondedate = totalCondedate.filter((person , index)=> person.course===courseName)
    res.status(200).send(filterCondedate)
}
else{
    res.status(202).send("category don't available")
}

})


export default categoryRouter