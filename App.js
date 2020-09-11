const express = require("express");
var app = express();
const ejs = require('ejs');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

// GLOBAL VARIABLE:
var friends = ["Jacob", "Ashley", "Sarah", "Tina" ];
var people = [{title: "People 1", author: "Ken"},{title: "People 2", author: "Carol"} ];
   
// PATH: HOME 
app.get("/", function(req, res){
    res.render("home.ejs")
});
// PATH: Empty Page for Template
app.get("/empty", function(req, res){
    res.render("empty.ejs")   
});
// PATH: FRIENDS & ADDFRIEND - Array called above in global variable
app.get("/friends", function(req, res){
    res.render('friends.ejs', {friends:friends}); // called in template // variable
     });
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newFriend;
    console.log("NEW FRIEND: " + newFriend);
    friends.push(newFriend);
    res.redirect("/friends");    
  }); 
// PATH: PEOPLE - Array called above in global variable
app.get("/people", function(req, res){
     res.render('people.ejs', {mypeople:people}); // called in template // variable
})
// PATH: COLORS - Array called in variable included
app.get("/colors", function(req, res){
    var favcolors = [ {title: "red"},  {title: "green"},  {title: "blue"}  ];
    res.render('colors.ejs', {showcolors:favcolors}); // called in template // variable
})
// PATH: DOGLIST - Array called in variable included
app.get("/doglist", function(req, res){
    var mydogs = [ {title: "Dog 1", author: "Bently"},  {title: "Dog 2", author: "Charlie"},  {title: "Dog 3", author: "Tilley"}  ];
    res.render('doglist.ejs', {thedogs:mydogs}); // called in template // variable
})


app.listen(3200, function(){
    console.log("Server has started on port 3200");
});

/*
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening on 3000");
})
*/