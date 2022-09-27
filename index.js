const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

// connect to mongoose atlas
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true}
).then(() => {
    console.log("connected to skooliva database");
}).catch(error => {
    console.log("you are not connected",error);
})

// run server
app.listen(port, () => {
    console.log("server running on port ",port);
});