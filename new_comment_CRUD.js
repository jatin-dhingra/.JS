const express= require('express');
const app= express();
const path= require('path');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
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

app.get('/comments/new',(req,res)=>
{

    res.render('comments/new.ejs');
})

app.post('/comments',(req,res)=>
{
    const {username,comment}=req.body;
    comments.push({username,comment});
    console.log(req.body);
    res.send("worked");
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
