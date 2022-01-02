const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
condt https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.listen(3000,function(){
  console.log("server is runner on port 3000");
})

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req,res){
  const fname =req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  console.log(fname , lname , email);
})

const data={
  members: [
    {
      email_address: email,
      status:"subscribed",
      merge_feilds: {
        FNAME: fname;
        LNAME: lname;
      }
    }
  ]
};

const jsonData = JSON.stringify(data);

https.request(url,options,functions(response){
  
})

//66676dca6d27086daec7f2ef8e7f37fc-us20
