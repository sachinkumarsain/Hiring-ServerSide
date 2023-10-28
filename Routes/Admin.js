import express, { Router } from "express"

import multer from "multer";
import path from "path" ;

//.............import file...................//

import condedate from "../Modals/Condedate.js"

const router = express.Router();

//.......................multer uses...................//

const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  // Initialize Multer
  const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1 MB limit
  });



//..........................post admin data........................//

router.post("/admin", upload.single("data.profilePic"), async (req, res) => {   


    const { fullname, course, email, mobile, address, linkedin, github, summary, skills, lanuages, } = req.body.data

    const profilePic = req.file;

    console.log(req.body)

    // console.log(profilePic)


    // const condedateData = new condedate({
    //     fullname,profilePic, course, email, mobile, address, linkedin, github, summary, skills, lanuages
    // })

    // await condedateData.save()
    res.status(200).send(profilePic)
})


export default router