const express= require('express');
const app= express();
const path= require('path');
const uuid= require('uuid');
const {v4:uuidv4}=require('uuid');
const methodOverrid=require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('views engine','ejs');
app.use(methodOverrid('_method'));

let comments=[
    {
        id:uuidv4(),
        username:"jatin",
        comment:"hey rhere"
    },
    {
        id:uuidv4(),
        username:"amrasha",
        comment:"balh blahhhh"
    },
    {
        id:uuidv4(),
        username:"ashwin",
        comment:"yoyoyo"
    },
    {
        id:uuidv4(),
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
    comments.push({username,comment,id:uuidv4()});
    console.log(req.body);
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>
{
    const {id}=req.params;
   const comment= comments.find(c=> c.id===id)
   res.render('comments/show.ejs',{comment});

})

app.get('/comments/:id/edit',(req,res)=>
{
    const {id}=req.params;
    const comment= comments.find(c=> c.id===id)
    res.render('comments/edit.ejs',{comment});
})

app.patch('/comments/:id',(req,res)=>
{
    const {id}=req.params;
    const newComment=(req.body.comment);
    
    const foundcomment= comments.find(c=> c.id===id)
    foundcomment.comment=newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id',(req,res)=>
{
    const {id}=req.params;
    comments= comments.filter(c=> c.id!==id);
    res.redirect('/comments')
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