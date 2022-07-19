require("dotenv").config()
const express=require("express");
const router=express.Router();

const User=require("../models/user");
const Book=require("../models/books");
const bcrypt=require("bcrypt")

const session=require("express-session");
// const passport=require("passport");
const app=express();
const jwt=require("jsonwebtoken")

const SECRET_KEY= process.env.SECRET_KEY

router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  
  }))




// const verifyToken = (req, res, next) => {
//     const token =
//       req.body.token || req.query.token || req.headers["x-access-token"];
  
//     if (!token) {
//       return res.status(403).send("A token is required for authentication");
//     }
//     try {
//       const decoded = jwt.verify(token, process.env.SECRET_KEY);
//       req.user = decoded;
//     } catch (err) {
//       return res.status(401).send("Invalid Token");
//     }
//     return next();
//   };

// // initialization of passport
// router.use(passport.initialize());
// // passport to manage the sessions
// router.use(passport.session());



// use static serialize and deserialize of model for passport session support
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
  
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
// });
  
//Register User Details
router.post("/register",async function(req,res){
    try {
      // Get user input
      const{firstName,lastName,username,gender,phonenumber,address,password}=req.body
      // Validate user input
      // if (!(username && password && firstName && lastName&&gender&&address&&phonenumber)) {
      //   res.json({message:"All input is required"});
      // }
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ username:username });
  
      if (oldUser) {
        res.send({message:"User Already Exist. Please Login"});
      }
       else{
        // Create user in our database
        const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
       const pass= await bcrypt.hash(password, salt);
        const user =await User.create({
          firstName,
          lastName,
          username, // sanitize: convert email to lowercase
          password:pass,
          gender,
          phonenumber,
          address
        });
     
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
        SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      user.token = token;
      console.log(user)
      // return new user
      res.json({message:"User Registered Successfull",user:user});
    }} catch (err) {
      console.log(err);
    }


});

//Login Router
router.post("/Login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    // if (!(email && password)) {
    //   res.status(400).send("All input is required");
    // }
    // Validate if user exist in our database
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, username },
        SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      console.log(user)
      res.json({message:"login successfull",user:user})
    }
    else{
    res.json({message:"Invalid Credentials"});}
  } catch (err) {
    console.log(err);
  }

});




// logout router
router.get('/logout', (req, res) => {
  req.logout(function(err){
    if(err){
      console.log(err);
    }
    else{
      req.session.destroy();
      res.send({message:"logged out successfully"})
    }
  });
});
 


// To get all the user details
router.get("/showUsers",paginatedResults(),function(req,res){
    res.json(res.paginatedResults);
});

// To get the user details based on conditions like page number and the limit
function paginatedResults() {
    return async (req, res, next) => {
      
      const page = parseInt(req.query.pagenumber);
      const limit = 10
      //parseInt(req.query.limit);
      const skipIndex = (page - 1) * limit;
      const results = {};
  
      try {
        results.results = await User.find()
          .sort({ _id: 1 })
          .limit(limit)
          .skip(skipIndex)
          .exec();
        res.paginatedResults = results;
        next();
      } catch (e) {
        res.status(500).json({ message: "Error Occured" });
      }
    };
  }


// Delete user details based on given user id
router.delete('/deleteUser/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'user deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such user' }));
  });
  
//To add new book details 
router.post('/addbook',(req,res)=>{
    const{title,authorname,about}=req.body
    const book=new Book({title,authorname,about})
    book.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"New Book Added Sucessfully"})
        }
    })
});


// To get all the books details
router.get("/showBooks",function(req,res){
    Book.find()
    .then(users=> res.send(users))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// Updated password
router.put("/updatepassword",async function(req,res){
    const salt=await bcrypt.genSalt(10);
    const pass=await bcrypt.hash(req.body.password,salt);
    User.findOneAndUpdate({username:req.body.username}, {$set: {password:pass}}, {upsert: true}, function(err,doc) {
        if (err) { res.send(err); }
        else { res.send({message:"Password Updated Successfully",newPassword:doc}); }
      });  
})

// Update profile details based on the id
router.post("/updateprofile/:id", function(req,res){
 
    const{firstName,lastName,username,phonenumber,address}=req.body;
   
     
       User.findOneAndUpdate({_id:req.params.id},{ $set: {firstName:firstName,lastName:lastName,username:username,phonenumber:phonenumber,address:address
      }},{new:true},
  
        function(err,doc) {
        if (err) { res.send(err);
        console.log("nothing") }
        else { 
          console.log(doc)
          res.json({message:"Updated",user:doc}); }
      });  
    
})

module.exports=router;


