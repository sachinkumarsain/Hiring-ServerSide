
import jwt from "jsonwebtoken";
import { config } from "dotenv";  

config();
const jwtKey = process.env.SECRET_KEY;

function authorize(req, res, next) {
  const session = req.params.jwttoken;


  if (!session) {
    res.send({ status: 400, message: "Didn't get any SessionId" })
  }
 
  try {  
    const decodeToken = jwt.verify(session, jwtKey);
    const userName = decodeToken.userName; 


    if (userName) {
      req.authUsername = userName;
      next();
    } else {
      // res.status(300).send("failed auther");
      res.send({ status: 300, message: "failed authentication" })
    }
  } catch (err) {
    // res.status(301).send("failed auther");
    res.send({ status: 301, message: "Unknown User" })
  }

}

export default authorize;
