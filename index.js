const express = require('express');
const app = express();
const port = 3000;

var data = require('./data/test.json');

app.set("view engine", "ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

//Home Page 
app.get('/', (req, res) => {
  let title = "Home";
  res.render("pages/index", { "title": title });
});

//About Page
app.get('/about', (req, res) => {
  let title = "About Page";
  res.render("pages/about", { "title": title });
});

//users index is our list page
app.get('/users', function(req, res) {
  var title = 'Users Page';
  res.render('users/index', {
    title: title,
    users: data
  });
});

//Hobbies Page
app.get('/hobbies', (req, res) => {
  let title = "Hobbies Page";
  res.render("pages/hobbies", { "title": title });
});

//Anime Page
app.get('/anime', (req, res) => {
  let title = "Anime Recomendations Page";
  res.render("pages/anime", { "title": title });
});



app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
    title: title,
    user: data[--id]
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});
