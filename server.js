const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const path = require("path")
const router = express.Router()
const PORT = process.env.PORT || 4300
const users_route = require("./routes/users");
const schedules_route = require("./routes/schedules")
const categories_route = require("./routes/categories")
const roles_route = require("./routes/roles")

const ratings_route = require("./routes/ratings")
const screens_route = require("./routes/screens")
const verifications_route = require("./routes/verifications")
const vendors_route = require("./routes/vendors")

const { default: mongoose } = require("mongoose");
require('dotenv').config();

app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static( path.join(__dirname, "public")))

 
const documentation = router.get("/", (req, res)=>{
    res.send("API Documentation page")
})


app.use("/", documentation) 
app.use("/users", users_route)
app.use("/schedules", schedules_route)
app.use("/categories", categories_route)
app.use("/roles", roles_route)


app.use("/ratings", ratings_route)
app.use("/screens", screens_route)
app.use("/verifications", verifications_route)
app.use("/vendors", vendors_route)



const URI = process.env.MONGODB_LOCAL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}, err => {
    if (err) throw err;
    console.log('Database Connected')
})




app.listen(PORT, ()=>{
console.log(`Running on   http://localhost:${PORT}`)
})


// mongoose.connect("mongodb://localhost/Cinema_mngt",
// { useNewUrlParser: true, useUnifiedTopology: true, family: 4 },
// err => {
//     if (err) throw err;
//     console.log("db connected")
//     // finds a database called website_db, if it does not exist. it will create the datatbase it self
// });
// mongoose.Promise = global.Promise;

// const port = 3014
// app.listen(port, () => {
// console.log(`Running ${port}`) 
// })