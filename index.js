const express = require("express");

const app = express();

function sum(n){
    let a = 0;
    for(let i=1;i<=n;i++){
        a = a+i;
    }
    return a;
}

app.get("/", function(req,res){
    const n = parseInt(req.query.n); // Parsing the query parameter to an integer
    const ans = sum(n);
    res.status(200).send(`Hi, your answer is ${ans}`); // Sending status code and response together
})

app.listen(3000);
