const {createshorturlWithoutUser}=require('../services/shorturl.service.js');
const {getShortUrl}=require('../dao/shorturl.js');
const wrapAsync=require('../utils/tryCatchWrapper.js');

const createShortUrl=wrapAsync((req,res)=>{
    
        const{url}=req.body;
        const shorturl=createshorturlWithoutUser(url);
        res.send(process.env.APP_URL+"/"+shorturl);
        
    
})
const redirectFromShortUrl= wrapAsync(async(req,res)=>{
    const {id}=req.params;
    const url = await getShortUrl(id);
    if(!url) throw new Error("Short URL not found");
    res.redirect(url.originalUrl);
})


   module.exports={createShortUrl,redirectFromShortUrl};