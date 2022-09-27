const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const studentPreegistrationRouter = require('./routes/studentreg')

const app = express();

const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
// simply tells server that when nodejs want to post data can have objects and number aswell
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/student-pre-registration', studentPreegistrationRouter);

// connect to mongoose atlas
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology:true}
).then(() => {
    console.log("connected to skooliva database");
}).catch(error => {
    console.log("you are not connected",error);
})

// run server
app.listen(port, () => {
    console.log("server running on port ",port);
});