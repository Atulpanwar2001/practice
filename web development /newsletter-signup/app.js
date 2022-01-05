const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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


const data={
  members: [
    {
      email_address: email,
      status:"subscribed",
      merge_fields: {
        FNAME: fname,
        LNAME: lname,
      }
    }
  ]
};

const jsonData = JSON.stringify(data);
const url ="https://us20.api.mailchimp.com/3.0/lists/a004e257e7";
const options ={
  method:"POST",
  auth:"Atul:21b2e03debb5ddb466f46dfbabcc406d-us20"
};

const request1=https.request(url,options,function(response){
  if(response.statusCode === 200)
  {
    res.sendFile(__dirname + "/success.html");
  }else{
    res.sendFile(__dirname + "/failure.html");
  }
  response.on("data",function(data){
    console.log(JSON.parse(data));
  })

})
request1.write(jsonData);
request1.end();
});
