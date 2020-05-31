var express = require("express");
var app = express(); 
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://dorin:33Deursi@cluster0-kcivl.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });

var cafea = 400;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home", {cafea: cafea});
});

app.post("/adauga", function(req, res){
    var cafeaAdaugata = req.body.cafeaAdaugata;
    cafea += Number(cafeaAdaugata);
    res.redirect("/");
});

app.post("/vinde", function(req, res){
    var cafeaVanduta = req.body.cafeaVanduta;
    cafea -= Number(cafeaVanduta);
    res.redirect("/");
});


app.listen(3000, function(){
    console.log("server started");
});



//define what a cat looks like
//tells to mongoose (the js parts of things), that i want to add cats to this db, and this is how it should look like
// var catSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     temperament: String
// });


// var doggoSchema = new mongoose.Schema({
//     nume: String, 
//     varsta: Number, 
//     culoare: String
// });

// //takes the schema and compiles it into a model, one variable
// var Cat = mongoose.model("Cat", catSchema);



//adding a new cat to the db

// var gina = new Cat({
//     name: "niculina",
//     age: 2, 
//     temperament: "patrupel"
// });

// gina.save(function(err, cat){
//     if(err){
//         console.log("smth went wrong");
//     } else {
//         console.log("we just saved a cat to the db: ");
//         console.log(cat);
//     }
// });



//retrieve all teh doggos from the db

// Doggo.find({}, function(err, doggos){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("toti cainutii");
//         console.log(doggos);
//     }
// });


// Cat.create({
//     name: "snow white",
//     age: 15, 
//     temperament: "pufa"
// }, function(err, cat){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });