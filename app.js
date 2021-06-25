const express = require("express");
const app=express();
const fs = require("fs");
const multer = require("multer");
const {createWorker} = require("tesseract.js");
const bp =require("body-parser");
const QRCode = require('qrcode');
const Jimp = require("jimp");
const qrCode = require('qrcode-reader');
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const worker = createWorker({
    logger: m => console.log(m)
  });

const PORT = 5000 || process.env.PORT;




const storage = multer.diskStorage({
    destination :'./public/uploads/',
    filename : function(req,file,cb){
        cb(null,file.originalname);
    }
});
// cb(null,file.fieldname + '-' + Date.now() + 
//         path.extname(file.originalname));


const uploads = multer({
    storage:storage  
}).single("avatar");





// const uploads = multer({storage:storage}).single("avatar");
app.set("view engine","ejs");

const Scnmed=[];
const Data=[];
let gtol;
const Cred=[];
const LabR=[];
const Bill=[];
let scnf ;
const patCode = "234r45k5";

app.get('/',(req,res)=>{
    res.render("login");
});

app.post('/login',(req,res)=>{
    Cred.length=0;
    const cred = req.body.name;
    console.log(cred);
    Cred.push(cred);
    res.render("dashboard",{LabR:LabR,Data:Data,Bill:Bill});
});

app.get('/doclogin',(req,res)=>{
    res.render("doclogin");
});

app.post('/doclogin',(req,res)=>{
    Cred.length=0;
    const Dcred = req.body.name;
    console.log(Dcred);
    Cred.push(Dcred);
    res.render("docdash",{LabR:LabR,Data:Data});
});



app.get('/dashboard',(req,res)=>{
    res.render("dashboard",{LabR:LabR,Data:Data,Bill:Bill});
});


app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
