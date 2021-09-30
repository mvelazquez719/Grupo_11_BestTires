const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
const rutasIndex = require("./routes/index.js");
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'))
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'./views'))
app.use('/', rutasIndex);


const puerto = process.env.PORT || 3500
app.listen(puerto, () => {
  console.log('Server is running on PORT ' + puerto);
});



