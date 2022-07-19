require('dotenv').config();
const express=require("express");
const bodyParser=require("body-parser");
const connectDB = require("./config/db");
var cors=require("cors");
const path = require("path");
const passport=require("passport");

const userRoutes=require("./routes/userRoutes")
const app=express();
const PORT=process.env.PORT || 4000
// Connect to Database
connectDB();

// initialization of passport
app.use(passport.initialize());


//cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/userRoutes',userRoutes);


if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
       app.use(express.static('client/build'));
       app.get('*', (req, res) => {
       res.sendFile(path.join(__dirname + '/client/build/index.html'));
       });
      }

app.listen(PORT,function(){
       console.log("server starts at "+PORT)
})