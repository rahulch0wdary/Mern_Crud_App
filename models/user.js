const mongoose=require("mongoose");
 const passportLocalMongoose=require("passport-local-mongoose");
// const findOrCreate=require("mongoose-findorcreate");

const userSchema=new mongoose.Schema({
    firstName: {
        type: String,
        required: true
       
    },
    lastName: {
        type: String,
       
    },
    username: {
        type: String,
        
    },
    gender: {
        type: String,
       
      },
   phonenumber: {
        type: String,
        
    },
    address: {
        type: String,
      
    },
    password: {
        type: String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    token: { type: String }
});
userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);


module.exports=User=mongoose.model('user',userSchema);