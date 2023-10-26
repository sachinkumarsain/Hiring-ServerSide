import express from "express"
import cors from "cors"


//..............import file..................//
import connection from "./Connection.js";
// import condedate from "./Modal.js";
import router  from "./Routes/Admin.js";
import userRouter from "./Routes/user.js";
import categoryRouter from "./Routes/Category.js";

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

//.................import files .................//

app.use(router ) 
app.use(userRouter)
app.use(categoryRouter)  


//...............................database connection..............................//
connection.then(() => {
    app.listen(8080, () => {
        console.log("server started at port 8080");
    });
})
