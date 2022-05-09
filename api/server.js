const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profilesRoutes");

const server = express();


server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/profiles", profileRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

server.get('/', (req, res) => {
    res.send(`Welcome to my API!!`)
})

module.exports = server;
