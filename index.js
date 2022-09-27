const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
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



// create a logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({all: true})
            )
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' })
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log' })
    ]
});

// connect to mongoose atlas
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology:true}
).then(() => {
    logger.info("connected to skooliva database");
}).catch(error => {
    logger.error(error.message);
})

// run server
app.listen(port, () => {
    logger.warn(`server running on port ${port}`);
});