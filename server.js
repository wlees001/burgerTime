var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express()
var port = 3000;
 
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controllers.js");

app.use('/', routes);

app.listen(port, function() {
    console.log("listening on port", port);
  });