const express= require('express');
const app= express();
const path= require('path');

app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');

const comments=[
    {
        username:"jatin",
        comment:"hey rhere"
    },
    {
        username:"amrasha",
        comment:"balh blahhhh"
    },
    {
        username:"ashwin",
        comment:"yoyoyo"
    },
    {
        username:"himal",
        comment:"hajurrr"
    }
]
app.get('/comments',(req,res)=>
{
    res.render('comments/index.ejs',{comments})
})
app.get('/',(req,res)=>
{
    res.send("Tacos ")
})
app.post('/',(req,res)=>
{
    const {type, meat,qty}=req.body;
    
    res.send(`Entered data ${type} - ${meat} - ${qty}`);
})
app.listen(1000,()=>
{
    console.log('listening');
})
