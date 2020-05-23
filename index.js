const express = require("express");
const app = express();
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')


const indexRoute = require("./route/index")

mongoose.connect("mongodb://localhost/mybrary", {useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.error(error) )

db.once("open", () => console.log("Database Connected"))

app.set('view engine', 'ejs');
app.set("layout", 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


app.use('/', indexRoute)

app.listen(process.env.PORT || 3000, ()=>console.log("Server started on port 3000"))