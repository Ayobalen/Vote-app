const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const candidateRoute = require("./routes/candidate");
const voterRoute = require("./routes/voter")
const app = express();

dotenv.config();

mongoose.connect( process.env.MONGO_URL).then (function () {
    console.log("Database connected successfully");
}) .catch (function (err) {
    console.log("Database connection failed");
})

app.use(express.json());
app.use("/api/candidate", candidateRoute);
app.use("/api/voter", voterRoute);


app.listen((process.env.PORT || 6000), () => {
    console.log('Server started on port 6000');
});
