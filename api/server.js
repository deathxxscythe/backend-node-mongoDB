const express = require("express");
const cors = require("cors");

const requireAuth = require('./middleware/requireAuth')
const authRouter = require("./routes/authRoutes");

const server = express();


server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);

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
