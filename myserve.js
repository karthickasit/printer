var exp=require("express");
var bp=require('body-parser');
var cors=require('cors');
var app=exp();
app.use(cors());
app.use(bp.json());
app.get("/",(req,res)=>{
res.end("node");

});

var myconnection=require("mongodb").MongoClient;
myconnection.connect("mongodb://localhost:27017",(err,conn)=>{
  
dbnm=conn.db("printerdata");
dbnm.createCollection("sendcustomers",(err,succ)=>{
  

console.log("collection created");
})




})

app.post("/postcustomers",(req,res)=>{
    console.log(req.body);
    var userdata={
        customerId: req.body.customerId,
        customerName: req.body.customerName,
        dateofreg:req.body.dateofreg,
        contactPerson: req.body.contactPerson,
        address:req.body.address,

        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
        // "uname":req.body.uname,"ucity":req.body.city
    }
    dbnm.collection("sendcustomers").insertOne(userdata,(err,succ)=>{
        console.log("created");
    });
    res.send({"msg":"success",userdata});
})

app.get("/getcustomers",(req,res)=>{
    dbnm.collection("sendcustomers").find({}).toArray((err,succ)=>{
        console.log(succ); 
         res.send({"msg":"get success","data":succ});
    })
    
  
})
   

app.listen(5000,()=>{
    console.log("app running");
})