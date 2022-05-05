const express = require("express");
const cors = require("cors");

const requireAuth = require('./middleware/requireAuth')
const authRouter = require("./routes/authRoutes");
const trackRouter = require("./routes/trackRoutes");

const server = express();


server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/tracks", trackRouter);

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
