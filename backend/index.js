import express from "express"
import cors from "cors"
import mongoose from "mongoose"
// require("dotenv").config()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/meetingSchedulerDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})


const userSchema = new mongoose.Schema({
    userName: String,
    name: String,
    email: String,
    password: String
})

const meetSchema = new mongoose.Schema({
    email: String,
    title: String,
    agenda: String,
    time: String,
    guest: String,
    date: String
})

const User = new mongoose.model("User", userSchema)

const meetTime = new mongoose.model("MeetTime", meetSchema)

//Routes

app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfully", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const {userName, name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                userName,
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
}) 

app.post("/createevent", (req, res)=>{
    const {email, title, agenda, time, guest, date} = req.body
    const meetingTime = new meetTime({
        email,
        title,
        agenda,
        time,
        guest,
        date
    })
    meetingTime.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "Successfully Submit" })
        }
    })
})

app.get("/getData", function(err, db) {
    if (err) throw err;
    var dbo = db.db("meetingSchedulerDB");
    dbo.collection("meetTime").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  });


app.listen(process.env.PORT || 9002, () => {
    console.log("BE started at port 9002")
})