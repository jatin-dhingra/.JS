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

const Dhoom2=new Movie({title:'Dhoom2',year:2004,score:8,rating:'A'});
const BMB=new Movie({title:'bhaag milkha bhaag',year:2014,score:9,rating:'A+'});

