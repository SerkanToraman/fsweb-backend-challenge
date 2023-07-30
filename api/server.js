//Imports
const path = require("path");
const http = require("http");
let express = require("express");
const app = express();
let server = http.createServer(app);
const socketIO = require("socket.io");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const authRouter = require("./auth/auth-router");
const userRouter = require("./user/users-routers");
const tweetRouter = require("./tweets/tweets-routers");
const likeRouter = require("./likesFollowers/likesFollowers-routers");
const publicPath = path.join(__dirname, "/../public");

//Middlewares
//Internal
const { mwRestricted } = require("../api/auth/auth-middleware");

//External
app.use(express.static(publicPath));
app.use(helmet());
app.use(express.json());
// var corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
app.use(cors());

const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {
  console.log("a user is connected");
  
    socket.on("chat message", (message) => {
      console.log("Received message:", message); 
    });
    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
});

//Routers
//Smoke test
// server.get('/',(req,res)=>{
//   res.json('smoke test successfull')
// })
app.use("/api/auth", authRouter);
app.use("/api/users", mwRestricted, userRouter);
app.use("/api/tweets", mwRestricted, tweetRouter);
app.use("/api/likes", mwRestricted, likeRouter);

//4. error middleware

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "app error!..." });
});

//export
module.exports = server;
