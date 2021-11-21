const express= require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', (req,res)=>
{
   
    res.render('views/home.ejs');
})

app.listen(5000,()=>
{
    console.log("at 3000");
})
