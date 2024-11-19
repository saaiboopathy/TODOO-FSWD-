const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/TODOO").then(()=>console.log("DB success"))
.catch(()=>console.log("DB Failed"))

const TodoActivities = mongoose.model("ToDoActivties",{
    name:String
},"activity")



app.get("/activities", function (req, res) {
    TodoActivities.find().then(function(retData){
        res.send(retData)
    })

})

app.post("/addactivities", function (req, res) {
    var newActivity = req.body.newActivity
    const newactivity = new TodoActivities(
        {
            name:newActivity
        }
    )

    newactivity.save().then(()=>console.log("Saved Successfully"))
})

app.listen(5000, function () {
    console.log("Server Started")
})
