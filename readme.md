Install These via Terminal:
npm init
npm i express
npm i ejs
npm i nodemon (optional)
npm i bodyparser
npm i axios

Extremely Basic EJS Website Template with Basic Routing SetUp in App.js


START: node App
The TEMPLATE in the VIEWS folder: Partials include: header, topnav and footer 
The PARTIAL VIEWS all have different background colors to help you determine the files.
These colors can be modified in public/css/styles.css

EMPTY PUBLIC PAGES
Use this template for pages that do NOT require a log in. 

Friends & People
Arrays are set at the top of App.js as Global Variables
EJS Template page loops thru the array and displays in HTML bullet list

Dogs & Colors
Arrays are set inside the route as Local Variable
EJS Template page loops thru the array and displays in HTML bullet list

Cat Page
JSON data is inside of the EJS page.
---------------------------------------------------
/addfriend (POST Request)

1 page (friends) contains a list of items (coming from an array defined in App.js) and a form at the bottom of the page. When you enter an item into the form and hit the button, it will add your item to the existing list of items because array.push is defined in App.js in the route.  
-------------------------------------------------

TODO: 
Add an internal JSON file
Add a page that will READ the JSON file

Add a database so that we can keep the data persistant.
 - then read from the database
Set up 'passport' for Authentication on pages that interact with the database
- add a page to FIND items in the database
- add a page to ADD items to the database
- add a page to EDIT items in the database
- add a page to DELETE items in the datbase
