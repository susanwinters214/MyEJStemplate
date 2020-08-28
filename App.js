const express = require("express");
var app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs")
   // res.send("<h1>Welcome to the home page</h1>");
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



app.listen(3200, function(){
    console.log("Server has started on port 3200");
});

/*
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening on 3000");
})
*/