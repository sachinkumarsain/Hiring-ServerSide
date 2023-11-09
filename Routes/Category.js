import express, { Router } from "express"

//.............import file...................//
import authorize from "../Auto.js";
import condedate from "../Modals/Condedate.js"
import dashboard from "../Modals/Dashboard.js";
const categoryRouter = express.Router();

//..................Category find and filter....................//

categoryRouter.post("/category/:jwttoken",authorize,async(req,res)=>{
    const courseName= req.body.course;
    let username = await req.authUsername 
   
 
if(courseName!==0){
    let totalCondedate= await condedate.find({});
    let filterCondedate = totalCondedate.map((person , index)=> person.course.filter((course ,index)=>{
        return course===courseName
    }))
    

   console.log(filterCondedate)
 
    // res.status(200).send(filterCondedate)
    // res.status(200).send(filterCondedate)
    // res.status(200).send(filterCondedate)
    // res.status(200).send(filterCondedate)


     
}
else{
    res.status(202).send("category don't available")
}

})
//..........................condedate findOne...............//


categoryRouter.patch("/condedateShow/:jwttoken", authorize, async (req, res) => {
    const condedateId = req.body.condedateId;
    const username = req.authUsername;


    try {
        const dashboardData = await dashboard.findOne({ username });

        if (!dashboardData) {
            res.status(404).send("User account not found");
        } else if (dashboardData.showCondedate.includes(condedateId)) {
            res.status(200).send("You already liked this candidate");
            const showCondedate = await condedate.findOne({ _id: condedateId }); 
  
            console.log(showCondedate)
        if (showCondedate) {
            res.status(200).send(showCondedate);
              } else {
                res.status(404).send("Candidate not found");   
            }
        } else {
            
                await dashboard.updateOne(
                    { username },
                    { $push: { showCondedate: condedateId } }
                );
                
                console.log(await dashboard.find({}))

              
          
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

export default categoryRouter