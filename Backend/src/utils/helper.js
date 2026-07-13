const {nanoid}=require('nanoid');

const generateNanoid=(length)=>{
    return nanoid(length);
}
module.exports={generateNanoid};