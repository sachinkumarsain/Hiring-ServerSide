import express from "express";
import multer from "multer";
import path from "path";
import condedate from "../Modals/Condedate.js";

const router = express.Router();


//code to save image in uploads/product folder with filename as product name
const storage = multer.diskStorage({
  destination: "uploads/Candidates",
  filename: function (req, file, callback) {
      // Use the student's name as the filename and keep the original extension
      const ext = path.extname(file.originalname);
      const filename = "Sachiin"+ ext;
      callback(null, filename);
  },
})
const upload = multer({ storage: storage }); 

// const storage = multer.diskStorage({
//   destination: "./uploads/",
//   filename: function (req, file, callback) {
//     callback(
//       null,
//       file.filename + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({
//   storage: storage,
//   // limits: { fileSize: 1000000 },
// });


router.post("/admin", upload.single("profilePic"), async (req, res) => {
  console.log(req.file);
  // const {
  //   fullname,
  //   email,
  //   mobile,
  //   address,
  //   linkedin,
  //   github,
  //   summary,
  //   graStartYear,
  //   graLastYear,
  //   graLocation,
  //   graDegree,
  //   university,
  //   graDec,
  //   graSkills,
  //   intStartTime,
  //   intComplete,
  //   intLocation,
  //   intDegree,
  //   institute,
  //   intDec,
  //   skills,
  //   intSkills,
  //   lanuages,
  // } = req.body.data;

  // const course = req.body.oneTank;
  const profilePic = req.file
  // const profilePic = req.file
  // const profilePic = req.file



  console.log(profilePic)

  // const condedateData = new condedate({
  //   fullname,
  //   course,
  //   email,
  //   mobile,
  //   address,
  //   linkedin,
  //   github,
  //   summary,
  //   profilePic, 
  //   Graduation: {
  //     startYear: graStartYear,
  //     lastYear: graLastYear,
  //     location: graLocation,
  //     degree: graDegree,
  //     university: university,
  //     decripation: graDec,
  //     skills: graSkills,
  //   },
  //   Intership: {
  //     startTime: intStartTime,
  //     completeTime: intComplete,
  //     location: intLocation,
  //     degree: intDegree,
  //     institute: institute,
  //     decripation: intDec,
  //     skills: intSkills,
  //   },
  //   skills,
  //   lanuages,
  // });

  // await condedateData.save();
  // await condedateData.save();
  res.status(200).send("successful");
});
// await condedateData.save();
export default router;
