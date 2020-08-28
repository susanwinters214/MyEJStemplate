npm init
npm i express
npm i ejs
npm i nodemon (optional)

Extremely Basic EJS Website Template with Basic Routing SetUp in App.js

Views Folder 
Partials include: header, topnav and footer 
1 page (posts) with a for loop that loops thru an array of items and displays them in an HTML UL / LI format using javaScript inside of an EJS template. 

1 page (friends) contains a list of items (coming from an array defined in App.js) and a form at the bottom of the page. When you enter and item into the form and hit the button, it will add your item to the existing list of items because array.push is defined in App.js in the route.  

Start with: node App:
You'll start off by seeing how the page is divided into sections.
The PARTIAL VIEWS all have different background colors to help you determine the files.
These colors can be modified in public/css/styles.css
Change the path to /posts
Change the path to /inlovewith/ANY-NAME-HERE
Example: /inlovewith/charlie
Then try this: /inlovewith/susan


