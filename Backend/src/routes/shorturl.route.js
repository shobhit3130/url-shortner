const express=require('express');
const router=express.Router();
const {createShortUrl}=require('../controller/shorturl.controller.js');

router.post('/',createShortUrl);




module.exports=router;