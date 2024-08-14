const express = require("express");
const port = 8085;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index");
})

app.get('/about', (req, res) => {
    return res.render("about");
})

app.get("/contact", (req, res) => {
    return res.render("contactte");
})

app.listen(port, (error) => {
    if (error) {
        console.log('server not started');
        return false;
    }
    console.log("http://localhost:"+8085);
})