const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();


//Get a Category
router.get('/', async (req, res)=>{
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({success: false})
    }
    res.status(200).send(categoryList);
})
