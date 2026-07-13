const express=require('express');
const {nanoid}=require('nanoid');
const dotenv=require('dotenv');
const urlSchema=require('./src/models/shorturl.model.js');
dotenv.config("./.env");
const shorturlRoute=require('./src/routes/shorturl.route.js');
const app=express();
const connectDB=require('./src/config/mongo.config.js');
const {redirectFromShortUrl}=require('./src/controller/shorturl.controller.js');
const {errorHandler} = require('./src/utils/errorHandler.js');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/create',shorturlRoute);
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);


app.listen(3000,()=>{
    connectDB();
    console.log("server is running on port 3000");
})