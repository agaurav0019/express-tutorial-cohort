// Creating in memory hospital where datas are stored in variables and not in database
// Create 4 routes 
// GET - users can check how many kidneys they have and their health
// POST - user can add a new kidney
// PUT - user can replace a kidney, make it healthy
// DELETE - user can remove a kidney

const express = require("express");
const app = express();

const users = [{
    name:"John",
    kidneys : [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i=0;i<noOfKidneys;i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys += 1;
        }
    }
    const noOfUnHealthyKidneys = noOfKidneys-noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })
});

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/", function(req,res){
    for(let i=0;i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({msg: "Done!"})
})

app.delete("/", function(req,res){
    const newKidney = [];
    for(let i=0;i<users[0].kidneys.length; i++){
        newKidney.push({
            healthy: true
        })
    }
    users[0].kidneys = newKidney;
    res.json({msg: "Done!"})
})

app.listen(3000);