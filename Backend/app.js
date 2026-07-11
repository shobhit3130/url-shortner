const express=require('express');
const {nanoid}=require('nanoid');
const dotenv=require('dotenv');
const urlSchema=require('./src/models/shorturl.model.js');
dotenv.config("./.env");
const app=express();
const connectDB=require('./src/config/mongo.config.js');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/api/create',(req,res)=>{
    const{url}=req.body;
    const shortUrl=nanoid(7);
    const newUrl=new urlSchema({
        originalUrl:url,
        shortUrl:shortUrl
    });
    newUrl.save();
    res.send(nanoid(7));
})

app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;   

        const url = await urlSchema.findOne({ shortUrl: id });

        if (!url) {
            return res.status(404).send("URL not found");
        }

        res.redirect(url.originalUrl);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000");
})