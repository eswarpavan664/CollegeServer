const express = require('express');
 
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require("cors");
const mysql = require("mysql");
const {mogoUrl} = require('./keys');
mongoose.connect(mogoUrl)

require('./models');


const requireToken = require('./requireToken');
const requireTokenAdmin = require('./requireTokenAdmin');

const requireTokenAdminAttendance = require('./requireTokenAdminAttendance');
const requireTokenAdminBuses = require('./requireTokenAdminBuses');

const requireTokenAdminPlacement = require('./requireTokenAdminPlacement');
const requireTokenFaculty = require('./requireTokenFaculty');

const requireTokenBusesDrivers = require('./requireTokenBusesDrivers');




const authRoutes = require('./authRoutes');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(authRoutes)


mongoose.connect(mogoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("database connected ...")
})


mongoose.connection.on('error',(err)=>{
    console.log("error occered... ",err);
})



const db1 = mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"",
    database:"studentsdata"
})

app.get("/ConnectionCheck",(req,res)=>{
    res.send("MySql Database is Connected....");
})

app.get("/GetStudentsData",(req,res)=>{
    const sq = "SELECT * FROM madhu";
    db1.query(sq,(error,result)=>{
        res.send(result);
    })
})

app.post("/addStudentData",(req,res)=>{
 
    const {Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage} = req.body;

    const sqlinsert=
    "INSERT INTO cse (Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

     
        db1.query(sqlinsert,[Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage],(err,result)=>{
            if(err) throw err;
            console.log("err",error);
            console.log("result",result);
            res.send("Done");
        }) 
       // res.send(Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage);
    
   
})

app.get("/GetByStudentId",(req,res)=>{
    var id =    req.query.id;
 
    const sqlget=
    "SELECT * FROM cse WHERE RegId = "+mysql.escape(id);
    
    console.log(sqlget);
  db1.query(sqlget, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
})



app.get("/GetStudentIds",(req,res)=>{
    var id =    req.query.id;
    console.log(id)
    const sqlget=
    'SELECT RegId FROM cse WHERE Section = '+id;
    
    console.log(sqlget);
  db1.query(sqlget, function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
  
})



app.get('/StudentDetails',requireToken,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            RegId:req.user.RegId,
            Branch:req.user.Branch,
            Year:req.user.Year,
            Percentage:req.user.Percentage,
            PhoneNumber:req.user.PhoneNumber,
            Backlogs:req.user.Backlogs,
            CollegeId:req.user.collegeId,
            StudentImage:req.user.StudentImage,
            Batch:req.user.Batch,
            Section:req.user.Section,
            Semester:req.user.Semester,
            TotalPeriods:TotalPeriods,
            AttendedPeriods:AttendedPeriods
        })
})

app.get('/AdminUserDetails',requireTokenAdmin,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            PhoneNumber:req.user.PhoneNumber,
            CollegeId:req.user.collegeId,
            Role:req.user.Role,
            CollegeName:req.user.CollegeName
        })
})


app.get('/SubAdminAttendance',requireTokenAdminAttendance,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            PhoneNumber:req.user.PhoneNumber,
            CollegeId:req.user.collegeId,
            Role:req.user.Role
        })
})


app.get('/SubAdminBuses',requireTokenAdminBuses,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            PhoneNumber:req.user.PhoneNumber,
            CollegeId:req.user.collegeId,
            Role:req.user.Role
        })
})


app.get('/SubAdminPlacement',requireTokenAdminPlacement,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            PhoneNumber:req.user.PhoneNumber,
            CollegeId:req.user.collegeId,
            Role:req.user.Role
        })
})



app.get('/FacultyDetails',requireTokenFaculty,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            PhoneNumber:req.user.PhoneNumber,
            CollegeId:req.user.collegeId,
            Role:req.user.Role,
            Subject:req.user.Subject,
            Qualification:req.user.Qualification,
            Status:req.user.Status,
            FacultyId:req.user.FacultyId,


        })
})



app.get('/BusesDriverDetails',requireTokenBusesDrivers,(req,res)=>{
    res.send(
        {
            email:req.user.email,
            Name:req.user.Name,
            PhoneNumber:req.user.PhoneNumber,
            CollegeId:req.user.collegeId,
            Role:req.user.Role,
            Status:req.user.Status,
            Busno:req.user.Busno,
            Route:req.user.Route,
            BusLatitude:req.user.BusLatitude,
            BusLongitude:req.user.BusLongitude


        })
})

 

app.listen(process.env.PORT ||5000,()=>{
    console.log("server is runnung on port 5000");
})