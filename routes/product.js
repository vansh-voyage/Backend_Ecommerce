// const express= require('express');
// const router =express.Router();
// const productController=require('../controllers/product')
// const {authenticateAdminToken,authenticateToken}=require('../middleware/user')

// const product = require('../models/product');
 
// // Create or generate products
 
// router.post('/add',authenticateAdminToken,productController.addProduct);
 
// // update details
// router.put('/update/:id',authenticateAdminToken,productController.update);
 
// //user detail
// router.get('/details/:id',productController.details);
//  //getalldetails
// router.get('/getall',productController.alldetails);
 


 
// //delete details
 
// router.delete('/delete/:id',authenticateAdminToken,productController.remove);
 
 
 
 
 
// module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const product = require('../models/product');
const { authenticateAdminToken, authenticateToken} = require('../middleware/user');



// Product Registration
router.post('/create',authenticateAdminToken, productController.create);

// Product Details
router.get('/getAllProducts', productController.getAllProducts);

// Product Fetch
router.get('/fetch/:id', productController.fetch)

// Update Product
router.put('/update/:id', authenticateAdminToken, productController.update);

// Delete Product
router.delete('/delete/:id', authenticateAdminToken, productController.deleteProduct);

module.exports = router;
