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
        required: true,
        maxlength:15
    },
    price:{
        type:Number,
        min:0
    },
    onsale:{
        type:Boolean,
        default:false
    },
    category:[String],
    qty:{
        online:{
            type:Number,
            default:0
        },
        instore:{
            type:Number,
            default:0
        }
    }


});

const Product=mongoose.model("Product",productSchema)

Product.insertMany([
        {name:"lana rhodes",price:7,onsale:true,category:['porn star','busty']},
        {name:"nicollete",price:500000}
]).then(d=>{
    console.log("works fine")
    console.log(d)
}).catch(err=>{
    console.log(err)
})
