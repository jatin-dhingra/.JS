const express= require('express');
const app = express();
const path= require('path');
const redditData= require('./data.json');
console.log(redditData);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.get('/', (req,res)=>
{
   
    res.render('home.ejs');
   
})

app.get('/rand',(req,res)=>
{
    const number= Math.floor(Math.random()*10+1);
    res.render('rand.ejs',{rand:number});
})

app.get('/r/:sub',(req,res)=>
{
    const {sub}=req.params;
    const data= redditData[sub];
    console.log(data);
    if(data)
    {
        res.render('sub.ejs',{...data});

    }
    else
    {
        res.render('nodata.ejs',{sub});
    }
    
})

app.get('/people',(req,res)=>
{
    const ppl=['jatin','himal','ashwin','prakash']
    res.render('people.ejs',{ppl});
})

app.listen(4000,()=>
{
    console.log("at 3000");
})
