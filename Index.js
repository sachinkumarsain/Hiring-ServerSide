import express from "express"
import cors from "cors"

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:"https://localhost:3000"}))


app.listen(8080,(req , res)=>{
    console.log("server started 8080")
})