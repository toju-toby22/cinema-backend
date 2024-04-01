const express = require('express');
const router = express.Router();
// const homeModel = require('../models/home_page_models')
const vendors = require('../models/vendor')











//card-page
// router.get("/ratings", (req,res)=>{
//     res.render("admin/Card-view")
// })

router.post("/vendor",async (req, res) => {
   let newvendor = await  vendors.create(req.body)
     res.send(newvendor)
 })
 //creating newvendor




router.get("/vendors", async(req, res) => {
    let vendors = await vendors.find().lean()
    res.send({vendors})
})
//getting all vendors



router.get("/vendors/:id", async(req, res) => {
    let singlevendors =  await vendors.findOne({_id:req.params.id})
    res.send(singlevendors)
})
//geting single vendors id 





router.put("/vendors/:id",async (req, res) => {
  let vendor =  await  vendors.findOne({_id:req.params.id}, req.body)
  if(vendor){
    await vendors.updateOne({_id:req.params.id})
  let updatedvendors =  await  vendors.findOne({_id:req.params.id}, req.body)
    res.send(updatedvendors)
    }else{
    res.send("no update")
    }
    
 })
 //updating a vendors//




 router.delete("/vendors/:id",async (req, res) => {
    //delete method
    let vendor =  await vendors.findOne({_id:req.params.id})
    if(vendor){
    await vendors.deleteOne({_id:req.params.id})
    res.send("ratings deleted")
    }else{
    res.send("no ratings")
    }
    
})
//dleting a vendors



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
