const express = require('express')
const app = express();
const morgan=require('morgan');

// app.use(morgan('tiny'))

app.use((req,res,next)=>{
    req.requestTime = Date.now();
    console.log(req.method," ",req.path);
    next();
})

app.use('/new',(req,res,next)=>{
    console.log("calling for the first middleware");
    next();
})


const password=((req,res,next)=>{
    const {password}=(req.query);
    if(password==='jatin')
    {
        next();
    }
    res.send('incorrect one');
    
})


app.get('/', (req, res) => {
    console.log(`Request time ${req.requestTime}`)
    res.send('Home page');
})
app.get('/new', (req,res)=>{
    console.log(`Request time ${req.requestTime}`)
    res.send('new page')
})

app.get('/secret',password,(req,res)=>{
    res.send('this is comming under the password');
})

app.use((req,res,next)=>{
    res.status(400).send('request not found');
})



app.listen(3000,(req,res)=>{
    console.log('listening on port 3000')
})
