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

    const tablename =req.query.table;
 
    const {Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage} = req.body;

    const sqlinsert=
    "INSERT INTO "+tablename+" (Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

     
        db1.query(sqlinsert,[Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage],(err,result)=>{
            
            //console.log("err",error);
            if (err){ 
                res.send({"Status":"Table Not created"});
            }else{
                res.send({"Status":"Done"});
            }
            
        }) 
       // res.send(Name,RegId,Branch,Section,Batch,Year,Semester,Percentage,Phoneno,Address,AttendancePercentage,NoOfClasses,TotalClasses,Email,Backlogs,CollegeId,StudentImage);
    //console.log(sqlinsert)
   
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

 



app.get('/addtable',(req,res)=>{

    const tablename =req.query.table;
    var sql="CREATE TABLE "+tablename+" (Name VARCHAR(255),RegId VARCHAR(255) PRIMARY KEY,Branch VARCHAR(255),Section VARCHAR(255),Batch VARCHAR(255),Year VARCHAR(255),Semester INT,Percentage DOUBLE,Phoneno VARCHAR(255),Address VARCHAR(255),AttendancePercentage DOUBLE,NoOfClasses INT,TotalClasses INT,Email VARCHAR(255),Backlogs INT,CollegeId VARCHAR(255),StudentImage VARCHAR(255))"
    //var sql = "CREATE TABLE "+tablename+" (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";

  
    db1.query(sql, function (err, result) {
      if (err){ 
        res.send({"Status":"Table Not created"});
    }else{
        res.send({"Status":"Table created"});
    }
       
    }); 

})


app.get('/GetTables',(req,res)=>{
    const tablename =req.query.table;
    db1.query("SELECT * FROM "+tablename, function (err, result, fields) {
        if (err){ 
            res.send({"Status":"Table Not created"});
        }else{
            res.send(result);
        }
      });

})


app.put('/UpdateAttendance',(req,res)=>{
    const tablename =req.query.table;
    const {RegId,NoOfClasses,TotalClasses} = req.body;

    var sql = "UPDATE "+tablename+" SET NoOfClasses = NoOfClasses"+NoOfClasses+" AND TotalClasses=TotalClasses"+TotalClasses+" WHERE RegId ="+RegId;
    db1.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });

})

app.listen(process.env.PORT ||5000,()=>{
    console.log("server is runnung on port 5000");
})