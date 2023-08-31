const express = require('express');
const breads = express.Router()
const breadData = require('../models/bread.js') 

//INDEX
breads.get('/', (req, res) => {
    res.send(breadData)
})

//SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(breadData[req.params.arrayIndex])
})


module.exports = breads