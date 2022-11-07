const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('./keys');
const { ORDER } = require('mysql/lib/PoolSelector');
const router = express.Router();
const Periods = mongoose.model('Period');

/* import Schemas */

const StudentUser = mongoose.model('User');
const AdminUser = mongoose.model('AdminUser');
const SubAdminAttendance = mongoose.model('SubAdminAttendance');
const SubAdminBuses = mongoose.model('SubAdminBuses');
const SubAdminPlacements = mongoose.model('SubAdminPlacements');
const FacultyUser = mongoose.model('FacultyUser');
const BusesDriver = mongoose.model('BusesDriver');


/* Routes */ 


/*placements*/

const  post = mongoose.model('Posts');

const  Apply = mongoose.model('Apply');
/*placements*/

 
 
// StudentSignup
router.post('/StudentSignup',async (req,res)=>{
   
  
  const {email,password,Name,Branch,Year,StudentImage,Batch,Section,Semester,PhoneNumber,Percentage,Backlogs,RegId,collegeId,TotalPeriods,AttendedPeriods} = req.body;

    try{
      const user = new StudentUser({email,password,Name,Branch,Year,PhoneNumber,Percentage,Backlogs,RegId,collegeId,StudentImage,Batch,Section,Semester,TotalPeriods,AttendedPeriods});
      await  user.save();
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})




app.get('/StudentDetail',(req,res)=>{
  
  StudentUser.find({RegId:"19A21A0534"},(err, docs) => {
      if (!err) {
           res.send(docs);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });
})

router.post('/Periods',async (req,res)=>{
   
   
  const {Period,CollegeId,SirName,SirId,Day,Section,Branch,Year,Batch,Timing,Status,Subject} = req.body;

    try{
      const periods = new Periods({Period,CollegeId,SirName,SirId,Day,Batch,Section,Branch,Year,Timing,Status,Subject});
      await  periods.save();
      res.send("Done");

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
})



router.post('/StudentSignin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await StudentUser.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
      await user.comparePassword(password);    
      const token = jwt.sign({userId:user._id},jwtkey)
      res.send({token})
    }catch(err){
        return res.status(422).send({error :"must provide email or password"})
    }
})


// StudentSignup


/*-----------------------------------------------*/

//AdminSignup

router.post('/AdminSignup',async (req,res)=>{
   
  const {email,password,Name,PhoneNumber,collegeId,Role,CollegeName} = req.body;

  try{
    const user = new AdminUser({email,password,Name,PhoneNumber,collegeId,Role,CollegeName});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/AdminSignin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await AdminUser.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})



/*-----------------------------------------------*/


//SubAdminAttendanceSignup

router.post('/SubAdminAttendanceSignup',async (req,res)=>{
   
  const {email,password,Name,PhoneNumber,collegeId,Role} = req.body;

  try{
    const user = new SubAdminAttendance({email,password,Name,PhoneNumber,collegeId,Role});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/SubAdminAttendanceSignin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await SubAdminAttendance.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})

/*-----------------------------------------------*/

//SubAdminBusesSignup

router.post('/SubAdminBusesSignup',async (req,res)=>{
   
  const {email,password,Name,PhoneNumber,collegeId,Role} = req.body;

  try{
    const user = new SubAdminBuses({email,password,Name,PhoneNumber,collegeId,Role});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/SubAdminBusesSignin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await SubAdminBuses.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})



/*-----------------------------------------------*/


//SubAdminPlacementSignup


router.post('/SubAdminPlacementSignup',async (req,res)=>{
   
  const {email,password,Name,PhoneNumber,collegeId,Role} = req.body;

  try{
    const user = new SubAdminPlacements({email,password,Name,PhoneNumber,collegeId,Role});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/SubAdminPlacementSignin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await SubAdminPlacements.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})



/*-----------------------------------------------*/


//FacultySignup


router.post('/FacultySignup',async (req,res)=>{
   
  const {email,password,Name,PhoneNumber,collegeId,Role,Status,Subject,Qualification,FacultyId} = req.body;

  try{
    const user = new FacultyUser({email,password,Name,PhoneNumber,collegeId,Role,Status,Subject,Qualification,FacultyId});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/FacultySignin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await FacultyUser.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})


/*-----------------------------------------------*/


//BusesDriversSignup


router.post('/BusesDriversSignup',async (req,res)=>{
   
  const {email,password,Name,PhoneNumber,collegeId,Role,Busno,Route,Status} = req.body;

  try{
    const user = new BusesDriver({email,password,Name,PhoneNumber,collegeId,Role,Busno,Route,Status});
    await  user.save();
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})

  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})

router.post('/BusesDriversSignin',async (req,res)=>{
  const {email,password} = req.body
  if(!email || !password){
      return res.status(422).send({error :"must provide email or password"})
  }
  const user = await BusesDriver.findOne({email})
  if(!user){
      return res.status(422).send({error :"must provide email or password"})
  }
  try{
    await user.comparePassword(password);    
    const token = jwt.sign({userId:user._id},jwtkey)
    res.send({token})
  }catch(err){
      return res.status(422).send({error :"must provide email or password"})
  }
})


/*-----------------------------------------------*/


/*placements*/




router.post('/AddJobPost',async (req,res)=>{
   
  const {CompanyName,Logo,Salary,lastDate,ApplyLink,collegeId,PostedDate,Description,PostId} = req.body;

  try{
    const Add = new post({CompanyName,Logo,Salary,lastDate,ApplyLink,collegeId,PostedDate,Description,PostId});
    await  Add.save().then(()=>    res.send("uploaded successfully"));
  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})


router.get('/getposts', function(req, res, next) {
 
const id =  req.query.id;
 

     
  post.find({collegeId:id},(err, docs) => {
    
      if (!err) {
           res.send(docs);
           console.log("hiii",id);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});



router.get('/deletepost', function(req, res, next) {
  const id =  req.query.id;
  post.deleteOne({_id:id},(err, docs) => {
      if (!err) {
           res.send(docs);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});



router.get('/getapplys', function(req, res, next) {
  const id =  req.query.id;
  Apply.find({CollegeId:id},(err, docs) => {
      if (!err) {
           res.send(docs);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});



router.get('/getuserapplys', function(req, res, next) {
  const id =  req.query.id;
  Apply.find({email:id},(err, docs) => {
      if (!err) {
           res.send(docs);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});



router.get('/getperiods', function(req, res, next) {
  const id =  req.query.id;
  const day =req.query.day;
  Periods.find({SirId:id,Day:day} ,(err, docs) => {
      if (!err) {
           res.send(docs);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});



router.get('/deleteApplication', function(req, res, next) {
  const id =  req.query.id;
  
  Apply.deleteOne({_id:id},(err, docs) => {
      if (!err) {
          console.log("Deleted")
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});


router.post('/ApplyForJob',async (req,res)=>{
   
  const {Name,Id,Branch,PhoneNumber,CollegeId,email,CompanyName,LastDate,AppliedDate,PostedDate,PostId} = req.body;

  try{
    const  apply  = new Apply({Name,Id,Branch,PhoneNumber,email,CollegeId,CompanyName,LastDate,AppliedDate,PostedDate,PostId});
    await  apply.save().then(()=>   console.log("Uploaded"));
  }catch(err){
    return res.status(422).send(err.message)
  }
})








router.get('/getlist', function(req, res, next) {
  const id =  req.query.id;
  demo.find((err, docs) => {
      if (!err) {
           res.send(docs);
           console.log(docs);
      } else {
          console.log('Failed to retrieve the Course List: ' + err);
      }
  });

});



router.post('/addlist',async (req,res)=>{
   
  const {lists} = req.body;

  try{
    const dem = new demo({lists});
    await  dem.save().then(()=>    res.send("uploaded successfully"));
  }catch(err){
    return res.status(422).send(err.message)
  }
  
  
})


/*placements*/

 
module.exports = router