const exp = require('constants');
const express= require('express');
const app= express();
app.use(express.urlencoded({extended: true}));
app.use(express.json)
app.get('/',(req,res)=>
{
    res.send("Tacos ")
})
app.post('/',(req,res)=>
{
    const {type, meat,qty}=req.body;
    
    res.send(`Entered data ${type} - ${meat} - ${qty}`);
})
app.listen(3000,()=>
{
    console.log('listening');
})
