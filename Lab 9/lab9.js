const http=require('http')
const fs=require('fs')
const url=require('url')
const express=require('express')
const path=require('path')
const app=express()
const router=express.Router()
const body=require('body-parser')


router.use(body.urlencoded({ extended: false }));

  




router.get('/',(req,res)=>{
    res.send("<h1>Welcome to Lab 9</h1>")
});

router.get('/read',(req,res)=>{
  const data=fs.readFile("lab8.json","utf-8",(err,data)=>{
    if(err) throw err;
    res.send(data.toString())
  });
});
router.get('/write',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});
router.post("/sign_up",(req,res)=>{
var id=req.body.iid;
 var name=req.body.iname;
 var type=req.body.itype;
 var rating=req.body.irating;
 var region=req.body.iregion;
 var date=req.body.vdate;
var data1={
    "id":id,
    "name":name,
    "type":type,
    "rating":rating,
    "region":region,
    "date":date
}
fs.readFile("lab8.json","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        const json=require('./lab8.json');
         json.records.push(data1);
         fs.writeFile("lab08.json",JSON.stringify(json),err=>{
            if(err) throw err;
         });
         res.send(json);
    }
      
    })
});
app.use("/",router);
app.listen(3000,(err)=>{
    console.log("The app is listening on port number 3000");
})