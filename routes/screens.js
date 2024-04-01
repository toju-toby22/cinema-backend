const express = require('express');
const router = express.Router();
// const homeModel = require('../models/home_page_models')
const screens = require('../models/screen')











//card-page
// router.get("/ratings", (req,res)=>{
//     res.render("admin/Card-view")
// })

router.post("/screen",async (req, res) => {
   let newscreen = await  screens.create(req.body)
     res.send(newscreen)
 })
 //creating screen




router.get("/screens", async(req, res) => {
    let screen = await screens.find().lean()
    res.send({screen})
})
//getting all screen



router.get("/screens/:id", async(req, res) => {
    let singlescreen =  await screens.findOne({_id:req.params.id})
    res.send(singlescreen)
})
//geting single screen id 





router.put("/screens/:id",async (req, res) => {
    let updatescreens =  await  screens.findOne({_id:req.params.id}, req.body)
    if(updatescreens){
      await verifications.updateOne({_id:req.params.id})
    let updatedscreen=  await  screens.findOne({_id:req.params.id}, req.body)
      res.send(updatedscreen)
      }else{
      res.send("no update")
      }
  
   })
   //updating a screen//



 router.delete("/screens/:id",async (req, res) => {
    //delete method
    let deletescrens =  await screens.findOne({_id:req.params.id})
    if(deletescrens){
    await screens.deleteOne({_id:req.params.id})
    res.send("ratings deleted")
    }else{
    res.send("no ratings")
    }
    
})
//dleting a screens



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
