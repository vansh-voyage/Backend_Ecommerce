const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const {
    authenticateAdminToken,
    authenticateToken,
} = require("../middleware/user")
// const User = require('../models/user');
 
// User Registration
 
router.post('/signup',userController.signUp)
 
// User Login
router.post('/login',userController.login);
 
//user detail
router.get('/details',authenticateToken,userController.details);
 
//update detail
router.put('/updatedetails',authenticateAdminToken,authenticateToken,userController.updateDetails);
 
//delete details
 
router.delete('/delete/:id',authenticateAdminToken,userController.deleteUser);
 
 
 
 
 
module.exports = router;