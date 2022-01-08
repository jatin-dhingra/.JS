const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(()=>{
        console.log("connected");
    })
    .catch(err=>
    {
        console.log("error");
        console.log(err)
    })

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number
    }
});

const Product=mongoose.model("Product",productSchema)

Product.insertMany([
        {name:"keyboard",price:1000},
        {name:"smartwatch",price:50000}
]).then(d=>{
    console.log("works fine")
    console.log(d)
}).catch(err=>{
    console.log(err)
})
