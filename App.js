const express = require("express");
var app = express();
const ejs = require('ejs');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

// ADD TO LIST:
var friends = ["Charlie", "Bentley", "Tilly", "Jacob" ];

app.get("/", function(req, res){
    res.render("home.ejs")
   // res.send("<h1>Welcome to the home page</h1>");
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susan"},
        {title: "Post 2", author: "Charlie"},
        {title: "Post 3", author: "Tina"},
    ];
    res.render('posts.ejs', {posts:posts}); // called in template // variable
})

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newFriend;
    console.log("NEW FRIEND: " + newFriend);
   friends.push(newFriend);
  res.redirect("/friends");    
  }); 


app.get("/friends", function(req, res){

       res.render('friends.ejs', {friends:friends}); // called in template // variable
  });

 

// Empty Page for Template
app.get("/empty", function(req, res){
    res.render("empty.ejs")   
});

// Fell in love with WHO - A dynamic page
app.get("/inlovewith/:who", function(req, res){
    var who = req.params.who;
    res.render('love.ejs', {varWho: who})   
});



app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susan"},
        {title: "Post 2", author: "Charlie"},
        {title: "Post 3", author: "Tina"},
    ];
    res.render('posts.ejs', {posts:posts}); // called in template // variable
})


/*
app.listen(3300, function(){
    console.log("Server has started on port 3300");
});
*/

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening on 3000");
})
