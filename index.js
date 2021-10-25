const bodyParser = require("body-parser");
const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
//app.use(express.bodyParser()); //To show that you will be using BodyParser

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', require("ejs").renderFile);
app.set("view engine", "html");

/*
Endpoints necesarios
-Agregar usuarios
-Verificar si el usuario existe y su contraseña es correcta
-Agregar post
-Borrar post
-Obtener post
-Editar post
*/

let users = [ {id: 1, user: "Eduardo", pass:"123"}, {id: 2, user: "Carlos", pass:"456"}];
let generalPosts = [ {id: 1, userId: 1, title: "Titulo", description: "This is a description", imageUrl: ""}]; 

app.route('/user')
  .get((req, res) => {
      res.send(users);
  })
  .post( (req, res) => {
    let newEmail = req.body.email;
    let newUser = req.body.user;   // true
    let newPass = req.body.pass;   // true
    let newId = users[users.length-1].id + 1;

    if(newUser == undefined){
        res.send("Invalid User");
    }else if(newPass == undefined){
        res.send("Invalid Password");
    }else if(newEmail == undefined){
        res.send("Invalid Email");
    }else{
        let x = {id: newId, user: newUser, pass: newPass, email: newEmail}
        users.push(x);
        res.send("User Added");
    }
  })

  .put( (req, res) => {
    let id = req.body.id;
    let user = req.body.user;
    let pass = req.body.pass;
    let email = req.body.email;
    let index;

    for(let i = 0; i < users.length; i++){
        if(users[i].id == id){
            index = i;
        }

    }

    if(index == undefined){
        res.send("Error: invalid ID");
    }
    else if(user == undefined){
        res.send("Error: invalid user");
    }
    else if(email == undefined){
        res.send("Error: invalid email");
    }
    else if(pass == undefined){
        res.send("Error: invalid password");
    }else{
        users[index].user = user;
        users[index].pass = pass;
        users[index].email = email;
        
        res.send("user information updated");
    }

  })

  .delete((req, res) => {
    let id = req.body.id;
    let index;

    for(let i = 0; i < users.length; i++){
        if(users[i].id == id){
            index = i;
        }

    }

    if(index == undefined){
        res.send("Invalid ID");
    }else{
        users.splice(index, 1);
        res.send("user deleted");
    }
  });

  app.route('/posts')
  .get((req, res) => {
      res.send(generalPosts);
  })
  .post( (req, res) => {
    let userId = req.body.userId;   // true
    let title = req.body.title;   // true
    let description = req.body.description;   // true
    let url = req.body.url;
    let newId = generalPosts[generalPosts.length-1].id + 1;

    if(userId == undefined){
        res.send("Invalid User ID");
    }else if(title == undefined){
        res.send("Invalid Title");
    }else if(description == undefined){
        res.send("Invalid Description");
    }
    else{
        let x = {id: newId, userId: userId, title: title, description: description, imageUrl: url}
        generalPosts.push(x);
        res.send("Post Added");
    }
  })
  .put( (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let url = req.body.imageUrl;
    let index;

    for(let i = 0; i < generalPosts.length; i++){
        if(generalPosts[i].id == id){
            index = i;
        }

    }

    if(index == undefined){
        res.send("Error: invalid ID");
    }
    else if(title == undefined){
        res.send("Error: invalid title");
    }
    else if(description == undefined){
        res.send("Error: invalid description");
    }else{
        generalPosts[index].title = title;
        generalPosts[index].description = description;
        generalPosts[index].imageUrl = url;
        
        res.send("Post updated");
    }

  })
  .delete((req, res) => {
    let id = req.body.id;
    let index;

    for(let i = 0; i < generalPosts.length; i++){
        if(generalPosts[i].id == id){
            index = i;
        }

    }

    if(index == undefined){
        res.send("Invalid ID");
    }else{
        generalPosts.splice(index, 1);
        res.send("Post deleted");
    }
  });

    

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
    console.log("Server running on 3000");
});