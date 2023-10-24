import express from "express"
import cors from "cors"

import connection from "./Connection";

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:"https://localhost:3000"}))

connection.then(() => {
    app.listen(8080, () => {
        console.log("server started at port 8080");
    });
})
