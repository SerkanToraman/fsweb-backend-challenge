//Imports
const http = require("http");
const express = require('express');
const app = express();
const socketIO = require("socket.io");
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const authRouter = require('./auth/auth-router')
const userRouter = require('./user/users-routers')
const tweetRouter =require('./tweets/tweets-routers')
const likeRouter = require('./likesFollowers/likesFollowers-routers')


//Middlewares
//Internal
const {mwRestricted} = require('../api/auth/auth-middleware')

//External
app.use(helmet());
app.use(express.json());
var corsOptions = {
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
const server = http.createServer(app);
const io = socketIO(server)
io.on("connection",socket=>{
  console.log(socket.id)
})




//Routers
//Smoke test
// app.get('/',(req,res)=>{
//   res.json('smoke test successfull')
// })
app.use('/api/auth',authRouter)
app.use('/api/users',mwRestricted,userRouter)
app.use('/api/tweets',mwRestricted,tweetRouter)
app.use('/api/likes',mwRestricted,likeRouter)


//4. error middleware

app.use((err,req,res,next)=>{
  res.status(err.status || 500)
      .json({message: err.message || "app error!..."})
})

//export
module.exports = app;