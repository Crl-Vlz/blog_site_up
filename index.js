const bodyParser = require("body-parser");
const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
//app.use(express.bodyParser()); //To show that you will be using BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require("ejs").renderFile);
app.set("view engine", "html");


app.route("/about").
    get( (req, res) => {
        res.send("My New Information");
    })

    .post( (req, res) => {
        var name = req.body.name;
        console.log(name)
        //res.send("My New Information post"); Solamente se puede realizar un send, cuando todo este terminado
        //El return es lo ultimo que se realiza
        res.render(__dirname + "/html/success.html", { name: name });
    })

    .put( (req, res) => {
        res.send("My New Information put");
    })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
})

app.listen(3000, () => {
    console.log("Example to show it works");
})