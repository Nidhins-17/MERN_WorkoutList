//requiring dotenv(environment variable secretive)
require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

// just requiring the routes file
const workoutRoutes = require('./routes/workouts');

//express app
const app = express();

//middleware   app.use(middlewareFunction)
app.use(express.json());//so that it receives the data from the frontend, can access req object in that particular routes

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// routes(requests from the browser, frontend)
// app.use(workoutRoutes);

//we can also use relative paths
app.use('/api/workouts', workoutRoutes);


// connect to db
mongoose.connect(process.env.MONGO_URL)//returns a promise
.then(() => {
    
    //we need to listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db, listening on port ',process.env.PORT);
    })

})

.catch((error) => {
    console.log(error);
})

