const express = require('express');
const app = express();
const path = require('path');


app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render("index")
})
app.get('/login', (req, res) => {
  res.render("login")
})
app.get('/AdminLogin', (req, res) => {
  res.render("AdminLogin")
})
app.get('/OwnerLogin', (req, res) => {
  res.render("OwnerLogin")
})
app.get('/TenantLogin', (req, res) => {
  res.render("TenantLogin")
})

app.listen(3000)

