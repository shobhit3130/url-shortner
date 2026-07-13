const urlSchema=require('../models/shorturl.model');
const saveshorturl=async(userId,originalUrl,shortUrl)=>{
   
    const newUrl=new urlSchema({
        originalUrl:originalUrl,
        shortUrl:shortUrl
    })
    if(userId){
        newUrl.userId=userId;
    }
   await newUrl.save();
}
const getShortUrl=async(shortUrl)=>{
    return await urlSchema.findOneAndUpdate({shortUrl:shortUrl},{$inc:{clicks:1}});
}

module.exports={saveshorturl,getShortUrl};