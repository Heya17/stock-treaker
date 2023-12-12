// formRoutes.js
const express = require('express');
const Product = require('../model/products'); 
const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const formData = await Product.find();
    res.json(formData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/', async (req, res) => {
    console.log("req.body",req.body);
  try {
    const productName= req.body.productName;
    const  manufactureDate = req.body.manufactureDate;

    const price= req.body.price;
    const  productQuality = req.body. productQuality;
    const newFormEntry = new Product({ productName, manufactureDate,  price ,  productQuality });
    console.log("new form entry",newFormEntry);
    await newFormEntry.save();
   
    const productId = newFormEntry._id;
    
    res.status(201).json({
      productId,
      formEntry: newFormEntry,
     
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;