const bodyParser = require("body-parser");
const exp = require("constants");
const express = require("express");
const fs = require("fs");
//const bodyParser = require("body-parser");
const cheerio = require("cheerio");
const { title } = require("process");
const $ = cheerio.load(`<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Main Page</title>
    <!--Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap"
      rel="stylesheet"
    />

    <!--Google Material Icons-->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
  </head>
  <!--BODY-->
  <body>
    <!--NAVBAR-->
    <nav class="mdc-top-app-bar mdc-top-app-bar--fixed myNav">
      <div class="mdc-top-app-bar__row">
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
        >
          <a href="index.html">
            <button
              aria-label="Return to main"
              class="
                material-icons
                mdc-top-app-bar__navigation-icon
                mdc-icon-button
              "
            >
              home
            </button>
          </a>
          <button
            aria-label="See my posts"
            class="
              material-icons
              mdc-top-app-bar__navigation-icon
              mdc-icon-button
            "
          >
            space_dashboard
          </button>
        </section>
        <section
          class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
          role="toolbar"
        >
          <a href="login.html">
            <button
              aria-label="Profile"
              class="
                material-icons
                mdc-top-app-bar__navigation-icon
                mdc-icon-button
              "
            >
              account_circle
            </button>
          </a>
        </section>
      </div>
    </nav>

    <!--MAIN-->
    <main class="mdc-top-app-bar--fixed-adjust mainBody">
      <div class="mainBody" id="postingArea">
        <br>
        <button
          aria-label="Create Post"
          class="mdc-fab add addBtn"
          id="btn-add"
        >
          <div class="mdc-fab__ripple"></div>
          <span class="mdc-fab__icon material-icons"> add </span>
        </button>
      </div>
      
      <!--PopUp-->
      <!--When opened add class mdc-dialog--open from JS-->
      <div class="mdc-dialog myPopUp" id="popup">
        <div class="mdc-dialog__container">
          <div
            class="mdc-dialog__surface"
            role="dialog"
            aria-modal="true"
            aria-labelledby="my-dialog-title"
            aria-describedby="my-dialog-content"
          >
            <div class="mdc-dialog__header Head">
              <h2 class="mdc-dialog__title T" id="my-dialog-title">
                My Post
              </h2>
              <button
                class="mdc-icon-button material-icons mdc-dialog__close C"
                data-mdc-dialog-action="close"
                id="closePost"
              >
                close
              </button>
            </div>
            <form action="/posts" method="POST">
              <div class="mdc-dialog__content myForm" id="my-dialog-content">
                <!--FORMS-->
                <br>
                <div>
                  <label class="mdc-text-field mdc-text-field--outlined myTitle">
                    <span class="mdc-notched-outline">
                      <span class="mdc-notched-outline__leading"></span>
                      <span class="mdc-notched-outline__trailing"></span>
                    </span>
                    <input type="text" class="mdc-text-field__input" name="title" value="Title">
                  </label>
                </div>
                <br>
                <label class="mdc-text-field mdc-text-field--textarea myTA">
                  <span class="mdc-notched-outline myTA">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__trailing"></span>
                  </span>
                  <span class="mdc-text-field__resizer">
                    <textarea
                    class="mdc-text-field__input"
                    aria-labelledby="my-label-id"
                    name="description"
                    rows="8"
                    cols="40"
                    maxlength="140"
                    ></textarea>
                  </span>
                </label>
                <br />
                <br />
                <label class="mdc-text-field mdc-text-field--filled imageURL">
                  <span class="mdc-text-field__ripple"></span>
                  <span class="mdc-floating-label" id="my-label-id"
                  >Image URL</span
                  >
                  <input
                  class="mdc-text-field__input txtInput"
                  type="text"
                  name="url"
                  aria-labelledby="my-label-id"
                  />
                  <span class="mdc-line-ripple"></span>
                </label>
                <div class="mdc-text-field-helper-line">
                  <div class="mdc-text-field-character-counter">0 / 140</div>
                </div>
              </div>
              <div class="mdc-dialog__actions">
                <button
                type="submit"
                name="submit"
                class="mdc-button mdc-dialog__button"
                data-mdc-dialog-action="ok"
                id="postOK"
                >
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label Ok">Post</span>
              </button>
            </form>
            </div>
          </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
      </div>
    </main>

    <!--Personal CSS-->
    <link rel="stylesheet" href="styles/landing.css" />
    <!--Material Design CSS and Script (Pre-Packaged)-->
    <link
      href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css"
      rel="stylesheet"
    />
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="UIcontrol.js"></script>
    <script src="index.js"></script>
    <script src="materialControlNav.js"></script>
    <script src="materialControlLanding.js"></script>
    <script src="rippleControl.js"></script>
  </body>
</html>
`);

const app = express();
//app.use(express.bodyParser()); //To show that you will be using BodyParser

// configure the app to use bodyParser()
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
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

let users = [
  { id: 1, user: "Eduardo", pass: "123" },
  { id: 2, user: "Carlos", pass: "456" },
];
let generalPosts = [
  {
    id: 1,
    userId: 1,
    title: "Titulo",
    description: "This is a description",
    imageUrl: "",
  },
];
let activeUser = { id: 0, user: "" };

app
  .route("/user")
  .get((req, res) => {
    res.send(users);
  })
  .post((req, res) => {
    let newEmail = req.body.email;
    let newUser = req.body.user; // true
    let newPass = req.body.pass; // true
    let newId = users[users.length - 1].id + 1;

    if (newUser == undefined) {
      res.send("Invalid User");
    } else if (newPass == undefined) {
      res.send("Invalid Password");
    } else if (newEmail == undefined) {
      res.send("Invalid Email");
    } else {
      let x = { id: newId, user: newUser, pass: newPass, email: newEmail };
      users.push(x);
      res.sendFile(__dirname + "/public/index.html");
    }
  })

  .put((req, res) => {
    let id = req.body.id;
    let user = req.body.user;
    let pass = req.body.pass;
    let email = req.body.email;
    let index;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        index = i;
      }
    }

    if (index == undefined) {
      res.send("Error: invalid ID");
    } else if (user == undefined) {
      res.send("Error: invalid user");
    } else if (email == undefined) {
      res.send("Error: invalid email");
    } else if (pass == undefined) {
      res.send("Error: invalid password");
    } else {
      users[index].user = user;
      users[index].pass = pass;
      users[index].email = email;

      res.send("user information updated");
    }
  })

  .delete((req, res) => {
    let id = req.body.id;
    let index;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        index = i;
      }
    }

    if (index == undefined) {
      res.send("Invalid ID");
    } else {
      users.splice(index, 1);
      res.send("user deleted");
    }
  });

app
  .route("/posts")
  .get((req, res) => {
    if (generalPosts.length - 1) {
      res.send($.html());
    }
  })
  .post((req, res) => {
    let userId = activeUser.id; // true
    let title = req.body.title; // true
    let description = req.body.description; // true
    let url = req.body.url;
    let newId = generalPosts[generalPosts.length - 1].id + 1;

    /*  if(userId == undefined){
        res.send("Invalid User ID");
    }else */ if (title == null) {
      res.send("Invalid Title");
    } else if (description == null) {
      res.send("Invalid Description");
    } else {
      let x = {
        id: newId,
        userId: userId,
        title: title,
        description: description,
        imageUrl: url,
      };
      generalPosts.push(x);
      $(
        '<div class="mdc-card mdc-card-outlined card mainBody" id="' +
          String(x.id) +
          '"> <div class="post-title"><h1 class="cardTitle" id="' +
          String(x.id) +
          '">Post Title</h1></div> <img id="' +
          String(x.id) +
          '" class="my-card__media mdc-card__media mdc-card__media--16-9 myCard" src=""> <div class="cardText" id="' +
          String(x.id) +
          '">Sample Text YEEEEE</div><div class="bottom-drawer"><form class="mdc-button mdc-button--icon__leading post-btn" action="/deletePost" method="POST"> <input type="text" id=' +
          String(x.id) +
          ' class="mdc-button mdc-button--icon__leading post-btn mdc-text-field__input myPostID" style="position: absolute;" name="postID" value=""><button aria-label="View Post" class="mdc-button mdc-button--icon__leading post-btn type="submit"><span class="mdc-button__ripple delPost"' +
          String(x.id) +
          '"></span><i class="material-icons mdc-button__icon" aria-hidden="true">delete</i><span class="mdc-button__label">Delete Post</span></button></form><button aria-label="View Post" class="mdc-button mdc-button--icon__leading post-btn" id="editPost"><span class="mdc-button__ripple"></span><i class="material-icons mdc-button__icon" aria-hidden="true">edit</i> <span class="mdc-button__label">Edit Post</span> </button> </div> </div><br>'
      ).appendTo("#postingArea");

      $("#" + String(x.id) + ".cardTitle").text(x.title);
      $("#" + String(x.id) + ".cardText").text(x.description);
      $("#" + String(x.id) + ".myCard").attr("src", x.imageUrl);
      $("#" + String(x.id) + ".myPostID").attr("value", x.id);

      res.send($.html());
    }
  })
  .put((req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let url = req.body.imageUrl;
    let index;

    for (let i = 0; i < generalPosts.length; i++) {
      if (generalPosts[i].id == id) {
        index = i;
        break;
      }
    }

    if (index == null) {
      res.send("Error: invalid ID");
    } else if (title == null) {
      res.send("Error: invalid title");
    } else if (description == null) {
      res.send("Error: invalid description");
    } else {
      generalPosts[index].title = title;
      generalPosts[index].description = description;
      generalPosts[index].imageUrl = url;
      $("#" + String(generalPosts[index].id) + ".cardTitle").text(
        generalPosts[index].title
      );
      $("#" + String(generalPosts[index].id) + ".cardText").text(
        generalPosts[index].description
      );
      $("#" + String(generalPosts[index].id) + ".myCard").attr(
        "src",
        generalPosts[index].imageUrl
      );
      $("#" + String(x.id) + ".card.mainBody").add;
      res.send($.html());
    }
  })
  .delete((req, res) => {
    let id = req.body.$(".card.mainBody").id;

    for (let i = 0; i < generalPosts.length; i++) {
      if (generalPosts[i].id == id) {
        $("#" + String(x.id) + ".card.mainBody").remove();
        generalPosts.pop(generalPosts[i]);
      }
    }

    res.send($.html());
  });

app
  .route("/activeUser")
  .get((req, res) => {
    res.send(activeUser);
  })
  .post((req, res) => {
    let newUser = req.body.user; // true
    let newId;

    for (let i = 0; i < users.length; i++) {
      if (users[i].user == newUser) {
        newId = i;
      }
    }

    activeUser.id = newId;
    activeUser.user = newUser;
  });

app.route("/deletePost").post((req, res) => {
  let id = req.body.postID;

  for (let i = 0; i < generalPosts.length; i++) {
    if (generalPosts[i].id == id) {
      $("#" + String(generalPosts[i].id) + ".card.mainBody").remove();
      generalPosts.pop(generalPosts[i]);
    }
  }
  res.send($.html());
});

app.route("/editPost").post((req, res) => {
  console.log("HBJHNKJ", req.body.postID);
  let index = req.body.postID;

  generalPosts[index].title = title;
  generalPosts[index].description = description;
  generalPosts[index].imageUrl = url;
  $("#" + String(generalPosts[index].id) + ".cardTitle").text(
    generalPosts[index].title
  );
  $("#" + String(generalPosts[index].id) + ".cardText").text(
    generalPosts[index].description
  );
  $("#" + String(generalPosts[index].id) + ".myCard").attr(
    "src",
    generalPosts[index].imageUrl
  );
  $("#" + String(x.id) + ".card.mainBody").add;

  var postId = -1;

  generalPosts.forEach((element) => {
    if (element.title === title) {
      postId = element.id;
    }
  });

  res.send($.html());
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

var port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log("Server running on 3000");
});
