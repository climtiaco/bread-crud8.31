const express = require('express');
const breads = express.Router()
const breadData = require('../models/bread.js') 

//INDEX
breads.get('/', (req, res) => {
    res.send(breadData)
})

module.exports = breads