const urlSchema=require('../models/shorturl.model.js');
const {generateNanoid}=require('../utils/helper.js');
const {saveshorturl}=require('../dao/shorturl.js');
const { urlencoded } = require('express');

const createshorturlWithoutUser =  (url) => {
    const shortUrl= generateNanoid(8);
    if(!shortUrl){
        throw new Error("Failed to generate short URL");
    }
         saveshorturl(null,url,shortUrl);
        return shortUrl;
}

const createshorturlWithUser =  (url,userId) => {
    const shortUrl= generateNanoid(8);
        saveshorturl(userId,url,shortUrl);
        return shortUrl;
}

module.exports = { createshorturlWithoutUser,createshorturlWithUser };