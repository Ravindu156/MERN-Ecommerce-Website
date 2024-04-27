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

//Get a Category By Id
router.get('/:id', async (req, res)=>{
    const category =await Category.findById(req.params.id);

    if(!category){
        res.status(500).json({message: 'The category with given ID was not available!'});
    }
    res.status(200).send(category);
})


router.post('/', async (req, res)=>{
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color
    })

    category = await category.save();

    if(!category){
        return res.status(404).send('The category cannot be created!')
    }
    return res.send(category);
})



//Update a Category
router.put('/:id', async (req, res)=>{
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.name,
            color: req.body.color,
        },
        {new: true}
    )

    if(!category){
        return res.status(404).send('The category cannot be created!')
    }
    res.send(category);
})

