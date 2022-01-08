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

const personSchema= new mongoose.Schema({
    first:String,
    Last:String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.Last}`
})

personSchema.pre('save',async function(){
    console.log('about to save');
})

personSchema.post('save',async function(){
    console.log('saved right now');
})


const Person= mongoose.model('Person',personSchema);

