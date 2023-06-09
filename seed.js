const mongoose = require('mongoose');
const User = require('./model');

mongoose.connect('mongodb://127.0.0.1:27017/dhandolat-assgn1')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

const seedUsers = [
    {
        userId: '1',
        name: 'ezio',
        email: 'ezio@gmail.com',
        age: 20,
    },
    {
        userId: '2',
        name: 'desmond',
        email: 'desmond@gmail.com',
        age: 23,
    },
    {
        userId: '3',
        name: 'miles',
        email: 'miles@gmail.com',
        age: 19,
    },
    {
        userId: '4',
        name: 'apple',
        email: 'apple@gmail.com',
        age: 30,
    },
    {
        userId: '5',
        name: 'eden',
        email: 'eden@gmail.com',
        age: 60,
    },
]

User.insertMany(seedUsers)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })