import express, { Router } from "express"

//.............import file...................//
import authorize from "../Auto.js";
import condedate from "../Modals/Condedate.js"
// import dashboard from "../Modals/Dashboard.js";
const categoryRouter = express.Router();

//..................Category find and filter....................//

categoryRouter.post("/category/:jwttoken",authorize,async(req,res)=>{
    const courseName= req.body.course;
    let username = await req.authUsername 
   
 
if(courseName!==0){
    let totalCondedate= await condedate.find({});
    let filterCondedate = totalCondedate.filter((person , index)=> person.course===courseName)
    
    res.status(200).send(filterCondedate)
    
}
else{
    res.status(202).send("category don't available")
}

})
//..........................condedate findOne...............//

// categoryRouter.patch("/likeCondedate",   async(req,res)=>{
//     let likeId = req.body.condidateId
//     let dashboardData = await dashboard.find({})
   
// if(dashboardData.length===0){

//     const Dashboard = new dashboard({
//         favourite: 0
//     })   

//     await Dashboard.save()
// }
// else if(booksLiked.includes(likeId)){
//     res.status(200).send("you already likes this book")
// }
// else{
//     let liked = await dashboard.updateOne(
//         {$push:{favourite:likeId}}
//     )

//     // let totalLikedBook = await dashbord.likebook.find()

//     res.status(200).send("Successfully liked  book")

// }
    

    
        
// })


export default categoryRouter