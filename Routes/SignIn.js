import express, { Router } from "express"
import userData from "../Modals/User.js";
import dashboard from "../Modals/Dashboard.js";

//.............import file...................//

// import condedate from "../Modals/Condedate.js"

const userRouter = express.Router();


userRouter.post("/user", async (req, res) => {
    console.log(req.body)
    if (req.body.length !== 0) {
        const { fullname, companyEmail } = req.body.data;


        const userDatas = new userData({
            fullname, companyEmail
        })

        await userDatas.save()


        res.status(200).send("avialable  user");


    }
    else {
        res.status(202).send("don't user comming")
    }

})


export default userRouter