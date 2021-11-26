const express= require('express');
const app= express();

app.get('/',(req,res)=>
{
    res.send("Tacos ")
})
app.post('/',(req,res)=>
{
    res.send("Post req");
})
app.listen(3000,()=>
{
    console.log('listening');
})
