const express= require('express');
const app = express();
const path= require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.get('/', (req,res)=>
{
   
    res.render('home.ejs');
   
})

app.get('/rand',(req,res)=>
{
    res.render('rand.ejs');
})


app.listen(4000,()=>
{
    console.log("at 3000");
})
