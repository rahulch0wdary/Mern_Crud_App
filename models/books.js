const mongoose=require("mongoose");

const bookSchema=new mongoose.Schema({

     title:{
        type:String,
        required:true
     },
     authorname:{
        type:String,
        required:true
     },
     about:{
        type:String,
        required:false
     },

});

module.exports=Book=mongoose.model('book',bookSchema);