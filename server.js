const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

app.post("/",(req,res)=>{
    const date=req.body.n1;
    const month=req.body.n2;
    const year=req.body.n3;
    const kiki=month+" "+date+", "+year+" 23:15:30 "; 
    const birthday = new Date(kiki);
    const day1 = birthday.getDay();
    
    if (day1==0){res.send("Its is Sunday")}
    else if(day1==1){res.send("Its is on Monday")}
    else if(day1==2){res.send("Its is on Tuesday")}
    else if(day1==3){res.send("Its is on Wednesday")}
    else if(day1==4){res.send("Its is on Thursday")}
    else if(day1==5){res.send("Its is on Friday")}
    else if(day1==6){res.send("Its is on Saturday")}

    
});

PORT=process.env.PORT || 5000;
app.listen(PORT,console.log("server is up..."));