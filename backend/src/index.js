require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const authRouter = require('./routes/auth.route')
const messageRouter = require('./routes/message.route')
const groupRouter = require('./routes/group.route')
connectDB()

const app = express();
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/group", groupRouter)

app.listen(process.env.PORT, console.log("app is listening on", process.env.PORT))