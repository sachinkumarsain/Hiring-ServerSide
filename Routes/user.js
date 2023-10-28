import express from "express";
import userData from "../Modals/User.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";
import { config } from "dotenv";
import dashboard from "../Modals/Dashboard.js";

config();

const jwtKey = process.env.SECRET_KEY;

const userRouter = express.Router();


//..........................User Registertion .......................//

userRouter.post("/userRegister", async (req, res) => {
    try {
        if(req.body.data){
            const { fullname, companyEmail, username, password } = req.body.data;
            const hashedPassword = await bcrypt.hash(password, 10);
            const userDatas = new userData({
                fullname,
                companyEmail,
                username,
                password: hashedPassword
            });
    
            await userDatas.save();
    
            const newDashboard = new dashboard({
                username: username,
                favourite: 0,
                showCondedate: 0, 
    
            })
    
            await newDashboard.save();

            res.status(200).send("Registration successful");
        }
        else{
            res.status(204).send("not avaible user Data")
        }
        

        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

userRouter.post("/userLogin", async (req, res) => {

    const { username, password } = req.body.data;
    console.log(username)
    const userAccount = await userData.findOne({ username })

    if (userData) {

        if (userAccount && bcrypt.compareSync(password, userAccount.password)) {

            const token = Jwt.sign({ userName: username }, jwtKey);

            const SavedToken = ("key", token)

            res.status(200).send(SavedToken);
        }
        else {
            res.status(400).send("invalid  credentials")
        }
    }
    else {
        res.status(400).send("invalid credentials")
    }
});

export default userRouter;
    