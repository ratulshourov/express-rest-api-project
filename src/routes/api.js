const express= require('express');

const router=express.Router();
const HelloController=require('../controllers/HelloController');

router.get('/',HelloController.hello);

module.exports=router;