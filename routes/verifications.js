const express = require('express');
const router = express.Router();
// const homeModel = require('../models/home_page_models')
const verifications = require('../models/verification')











//card-page
// router.get("/ratings", (req,res)=>{
//     res.render("admin/Card-view")
// })

router.post("/verify",async (req, res) => {
   let verify = await  verifications.create(req.body)
     res.send(verify)
 })
 




router.get("/verify", async(req, res) => {
    let verification = await verifications.find().lean()
    res.send({verification})
})
//getting all verification



router.get("/verify/:id", async(req, res) => {
    let singleverification =  await verifications.findOne({_id:req.params.id})
    res.send(singleverification)
})
//geting single verification id 





router.put("/verify/:id",async (req, res) => {
  let updateverify =  await  verifications.findOne({_id:req.params.id}, req.body)
  if(updateverify){
    await verifications.updateOne({_id:req.params.id})
  let updatedverification =  await  verifications.findOne({_id:req.params.id}, req.body)
    res.send(updatedverification)
    }else{
    res.send("no update")
    }

 })
 //updating a verification//




 router.delete("/verify/:id",async (req, res) => {
    //delete method
    let deleteverify =  await verifications.findOne({_id:req.params.id})
    if(deleteverify){
    await verifications.deleteOne({_id:req.params.id})
    res.send("verification deleted")
    }else{
    res.send("no verification")
    }
    
})
//dleting a rating



module.exports = router;






 // // let newData = {
    // //     Banner_image: "/img/3.jpeg",
    // //     subtitleText: "The best free stock photos, royalty  free images & videos shared by creators.",
    // //     action1Text: "Hyper Realism Art",
    // //     action2Text: "3D PIxels",
    // //     action2Text: "Wallpapers",
    // //     Image1: "/img/2.jpeg",
    // // }//

    // homePageMode.create(newData) //Savee the object to the database using the model class name

    // let homePageRecords = await homePageMode.find()

    // homePageRecords = homePageRecords[0]
    // console.log(homePageRecords)
