const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');
//express app
const app = express();
//connect to mongo db
const dbURI = 'mongodb+srv://ChaosBlade:test1234@cluster0.fwsqki9.mongodb.net/Node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err))


//register view engine
app.set('view engine' , 'ejs');
//defult folder is views you can change the value tho


//middleware and static fieles
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.get('/' , (req,res)=>{
    res.redirect('/blogs');

});
app.get('/about' , (req,res)=>{
  //  res.send('<p>About page</p>');
  res.render('about', {title : 'About'});
});



//the blogs routes
app.use(blogRoutes);


//404 casee  ====== this have to be at the end beacuse it runs for all type or requests
app.use((req , res)=>{
    //we need to tell it it is a 404 status
    res.status(404).render('404', {title : '404'});
});