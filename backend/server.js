require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRouts = require('./routs/workouts')

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routs
// {app.get('/', (req,res) => {
//     res.json({messg:'welcom to the app'})
// })}

app.use('/api/workouts', workoutRouts)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('connected to DB &listening on port ',process.env.PORT)
            console.log('Hi! in the end I get the roud to access toDb')
        })

    })
    .catch((error) => {
        console.log(error);
    })


