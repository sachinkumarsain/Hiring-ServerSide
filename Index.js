import express from "express"
import cors from "cors"


//..............import file..................//
import connection from "./Connection.js";
// import condedate from "./Modal.js";
import router  from "./Routes/Admin.js";
import userRouter from "./Routes/SignIn.js" 

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

//.................import files .................//

app.post("/Admin" ,router ) 
app.post("/user" , userRouter)


//...............................database connection..............................//
connection.then(() => {
    app.listen(8080, () => {
        console.log("server started at port 8080");
    });
})
