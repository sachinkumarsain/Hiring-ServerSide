import express, { Router } from "express"

import multer from "multer";
import path from "path" ;

//.............import file...................//

import condedate from "../Modal.js"

const router = express.Router();

//.......................multer uses...................//

const storage = multer.diskStorage({
    destination: "uploads/Candidates",
    filename: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        const filename = req.body.name+ ext;
        callback(null, filename);
    },
})
const upload = multer({ storage: storage });



//..........................post admin data........................//

router.post("/admin", upload.single("profilePic"), async (req, res) => {   


    const { fullname, course, email, mobile, address, linkedin, github, summary, skills, lanuages, } = req.body.data

    const profilePic = req.file; 

    const condedateData = new condedate({
        fullname,profilePic, course, email, mobile, address, linkedin, github, summary, skills, lanuages
    })

    await condedateData.save()
    res.status(200).send(condedateData)
})


export default router