const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./src")));
const index = require("./src/routes/index.js");
const users = require("./src/routes/users.js");





app.use(express.static('./public'))
app.set('view engine','ejs');

app.use("/", index);
app.use("/register", index);
app.use("/login", index);

const puerto = process.env.PORT || 3500
app.listen(puerto, () => {
  console.log('Server is running on PORT ' + puerto);
});

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "./view/index.html"));
//});

//app.get("/register", (req, res) => {
//  res.sendFile(path.join(__dirname, "./view/register.html"));
//});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/productDetail.html"));
});

//app.get("/login", (req, res) => {
//  res.sendFile(path.join(__dirname, "./view/login.html"));
//});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/carrito.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/contacto.html"));
});