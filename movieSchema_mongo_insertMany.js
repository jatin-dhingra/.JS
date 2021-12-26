const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(()=>{
        console.log("connected");
    })
    .catch(err=>
    {
        console.log("error");
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
    
});

const Movie= mongoose.model('Movie',movieSchema);

Movie.insertMany([
    {title:"jhonwick2",year:2014,score:10,rating:'A+'},
    {title:"jhonwick",year:2012,score:10,rating:'A+'},
    {title:"jhonwick3",year:2016,score:9,rating:'A+'},
    {title:"jhonwick4",year:2023,score:100,rating:'A+'},


])
.then(data=>{

    console.log("works fine");
    console.log(data)
})
.catch((err)=>{
    console.log(err);
})
