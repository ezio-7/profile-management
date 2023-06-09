const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const User = require('./model');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/dhandolat-assgn1');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


class AppError extends Error {
    constructor(message, status) {
        super();
        this.message = message;
        this.status = status;
    }
}


function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}


app.get('/users/:id', wrapAsync(async(req, res, next) => {
    const user = await User.find({userId:req.params.id})
    if (!user) {
        throw new AppError('User Not Found', 404);
    }
    res.status(200).json({userId:user[0].userId, name: user[0].name, email:user[0].email,age:user[0].age});
}));

app.post('/users', wrapAsync(async(req, res, next) => {
    // const user = new User(req.body);
    const user = new User(req.body);
    await user.save();
    res.status(200).json({msg: 'added successfully', userId: user.userId, name: user.name, email:user.email,age:user.age});
}))

app.put('/users/:userId', async (req, res) => {
    const userId = req.params;
    const temp = await User.find({userId:req.params.userId})
    const user = await User.findOneAndUpdate(userId, req.body,{ runValidators: true, new: true});
    res.status(200).json({msg: 'updated successfully', userId: user.userId, name: user.name, email:user.email,age:user.age});
});

const handleValidationErr = err => {
    console.dir(err);
    return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name);
    //We can single out particular types of Mongoose Errors:
    if (err.name === 'ValidationError') err = handleValidationErr(err)
    next(err);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})



// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
