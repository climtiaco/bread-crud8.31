const express = require('express');
const breadRouter = express.Router()
const breadData = require('../models/bread.js') 

//INDEX
// So when i put res.render and the view i'm attaching is with the 'index.jsx' file, everything in this object that I'm putting in, will be input to that jsx file. 
breadRouter.get('/', (req, res) => {
    res.render('index',
    {
        breads: breadData,
        title: 'Index Page'
    })
})

//SHOW
//Here I'm changing res.send(breadData[req.params.arrayIndex]) now to res.render('Show', {}) so that it refers to the show.jsx page and then I can add that second argument as an object that reads exactly what I want it to 
breadRouter.get('/:arrayIndex', (req, res) => {
    if (breadData[req.params.arrayIndex]) {
    res.render('Show', {
        bread: breadData[req.params.arrayIndex]
    })
    } else {
        res.render('error404')
    }
})


module.exports = breadRouter