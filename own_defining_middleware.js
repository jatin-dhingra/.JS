const express = require('express')
const app = express();
const morgan=require('morgan');

app.use(morgan('tiny'))

app.use((req,res,next) => {
    console.log('first req')
    next();
    console.log('first req after next()')
})

app.use((req,res,next) => {
    console.log('second req')
    next();
})

app.get('/', (req, res) => {
    res.send('Home page');
})
app.get('/new', (req,res)=>{
    res.send('new page')
})


app.listen(3000,(req,res)=>{
    console.log('listening on port 3000')
})
