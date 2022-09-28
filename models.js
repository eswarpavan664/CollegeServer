const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const StudentuserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
     Year:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     Percentage:{
        type:String,
        required:true
    },
    Backlogs:{
        type:String,
        required:true
    },
    RegId:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Batch:{
        type:String,
        required:true
    },
    Semester:{
        type:String,
        required:true
    },
    Section:{
        type:String,
        required:true
    },
    StudentImage:{
        type:String,
        required:true
    },
    TotalPeriods:{
        type:String,
        required:true
    },
    AttendedPeriods:{
        type:String,
        required:true
    },

})

const PeriodSchema = new mongoose.Schema({
    Subject:{
        type:String,
        required:true
    },
    Period:{
        type:String,
        required:true
    },
    Batch:{
        type:String,
        required:true
    },
    CollegeId:{
        type:String,
        required:true
    },
    SirName:{
        type:String,
        required:true
    },
    SirId:{
        type:String,
        required:true
    },
    Day:{
        type:String,
        required:true
    },
    Section:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Timing:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },


     
})

const AdminuserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    CollegeName:{
        type:String,
        required:true
    },

})




const SubAdminAttendanceSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },

})



const SubAdminBusesSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
 
})



const SubAdminPlacementsSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },

})



const FacultyUserSchema = new mongoose.Schema({
    FacultyId:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Subject:{
        type:[String],
        required:true
    },
    Qualification:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    },

})



const  BusesDriverSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
     collegeId:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Busno:{
        type:String,
        required:true
    },
    Route:{
        type:[String],
        required:true
    },
    BusLatitude:{
        type:String,
        required:true
    },
    BusLongitude:{
        type:String,
        required:true
    },

    Status:{
        type:String,
        required:true
    },

})






/*Placements*/



const  PostSchema = new mongoose.Schema({
    collegeId:{
        type:String,
        required:true
    },
    ApplyLink:{
        type:String,
        required:true
    },
    lastDate:{
        type:String,
        required:true
    },
  
    Salary:{
        type:String,
        required:true
    },
  
    Logo:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
     PostedDate:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true

    },
    PostId:{
        type:String,
        required:true

    },
  

})

 


const  ApplySchema = new mongoose.Schema({
    Id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    PhoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    CollegeId:{
        type:String,
        required:true
    },
    CompanyName:{
        type:String,
        required:true
    },
    LastDate:{
        type:String,
        required:true
    },
    AppliedDate:{
        type:String,
        required:true
    },
    PostedDate:{
        type:String,
        required:true
    },
    PostId:{
        type:String,
        required:true

    },
  
  

})

/*placements*/


 

 
/* save password encryption*/
 

StudentuserSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})


AdminuserSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})

SubAdminAttendanceSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})



SubAdminBusesSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})


SubAdminPlacementsSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})


FacultyUserSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})


BusesDriverSchema.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')){
        return next()
    }
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return next(err)
        }
     bcrypt.hash(user.password,salt,(err,hash)=>{
         if(err){
             return next(err)
         }
         user.password = hash;
         next()
     })

    })

})

/* compared password*/

StudentuserSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}



AdminuserSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}

SubAdminAttendanceSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}


SubAdminBusesSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}


SubAdminPlacementsSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}


FacultyUserSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}

BusesDriverSchema.methods.comparePassword = function(candidatePassword) {
    const user = this;
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password,(err,isMatch)=>{
            if(err){
                return reject(err)
            }
            if (!isMatch){
                return reject(err)
            }
            resolve(true)
        })
    })

}

mongoose.model('User',StudentuserSchema); 

mongoose.model('AdminUser',AdminuserSchema);

mongoose.model('SubAdminAttendance',SubAdminAttendanceSchema); 

mongoose.model('SubAdminBuses',SubAdminBusesSchema);

mongoose.model('SubAdminPlacements',SubAdminPlacementsSchema); 

mongoose.model('FacultyUser',FacultyUserSchema);

mongoose.model('BusesDriver',BusesDriverSchema); 



mongoose.model('Posts',PostSchema);
mongoose.model('Apply',ApplySchema);

mongoose.model('Period',PeriodSchema);