const express = require('express');
const breadRouter = express.Router()
const breadData = require('../models/bread.js') 

//INDEX
breadRouter.get('/', (req, res) => {
    res.render('index',
    {
        breads: breadData
    })
})

//SHOW
breadRouter.get('/:arrayIndex', (req, res) => {
    res.send(breadData[req.params.arrayIndex])
})


module.exports = breadRouter