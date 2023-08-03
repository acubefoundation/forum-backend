require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 80;
const userRouter = require('./server/api/users/user.router');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);
//listen to port 3435
app

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));