const express = require('express');
const breadRouter = express.Router()
const breadData = require('../models/bread.js') 

//Questions to answer for myself:
//          Why are we creating a router again?

//INDEX
// So when i put res.render and the view i'm attaching is with the 'index.jsx' file, everything in this object that I'm putting in, will be input to that jsx file. 
breadRouter.get('/', (req, res) => {
    res.render('index',
    {
        breads: breadData,
        title: 'Index Page'
    })
})

//NEW
//The instructions told me that I had to put the "new" route on top of the "show" route. Reason being is because express will process the code from top to bottom, and because we already have another route that looks for the :arrayIndex, it's going to think that "new" is not a part of the array index and it will cause the error404 page to come up.
breadRouter.get('/new', (req, res) => {
    res.render('new')
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


// CREATE
breadRouter.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    breadRouter.push(req.body)
    res.redirect('/breads')
  })
  



module.exports = breadRouter