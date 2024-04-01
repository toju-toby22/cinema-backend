const express = require('express');
const router = express.Router();
// const homeModel = require('../models/home_page_models')
const ratings = require('../models/rating')











//card-page
// router.get("/ratings", (req,res)=>{
//     res.render("admin/Card-view")
// })

router.post("/create_rating",async (req, res) => {
   await ratings.create(req.body).then((newrating)=>{
    res.send({Success:newrating})
   }).catch((err)=>{
    res.send(err)
   })
    //  res.send(rating)
 })
 //creating rating




router.get("/rating", async(req, res) => {
    let rating = await ratings.find().lean()
    res.send({rating})
})
//getting all ratings



router.get("/ratings/:id", async(req, res) => {
    let singlerating =  await ratings.findOne({_id:req.params.id})
    res.send(singlerating)
})
//geting single rating id 





router.put("/ratings/:id",async (req, res) => {
    await  ratings.updateOne({_id:req.params.id}, req.body)
    res.send(updatedratings)

 })
 //updating a rating//




 router.delete("/ratings/:id",async (req, res) => {
    //delete method
    let deleterating =  await ratings.findOne({_id:req.params.id})
    if(deleterating){
    await ratings.deleteOne({_id:req.params.id})
    res.send("ratings deleted")
    }else{
    res.send("no ratings")
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
