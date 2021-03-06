require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const massive = require("massive");
const path = require("path");

const { strat, logout, getUser } = require(`${__dirname}/controllers/authCtrl`);
const placeCtrl = require("./controllers/placeCtrl");
const postCtrl = require("./controllers/postCtrl");
const infoCtrl = require("./controllers/infoCtrl");
const recCtrl = require("./controllers/recCtrl");
const favCtrl = require("./controllers/favCtrl");

const port = process.env.PORT || 3001;

const app = express();
app.use(express.static(`${__dirname}/../build`));
massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  app
    .get("db")
    .getUserByAuthid(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addUserByAuthid([user.id, user.name.givenName, user.name.familyName])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "http://localhost:3000/#/login"
  })
);

//______Auth endpoints
app.get("/logout", logout);
app.get("/api/me", getUser);

//______Search endpoints
app.get("/api/places", placeCtrl.getPlaces);

//______Info endpoints
app.post("/api/info/:authid", infoCtrl.postInfo);

//______Posts endpoints

app.get("/api/posts/:id", postCtrl.getPosts);
app.post("/api/posts", postCtrl.createPosts);
app.put("/api/posts/:id", postCtrl.updatePosts);
app.delete("/api/posts/:id/:locationId", postCtrl.deletePosts);

//______Recommended endpoints

app.get("/api/bars", recCtrl.getBars);
app.get("/api/museums", recCtrl.getMuseums);
app.get("/api/restaurants", recCtrl.getRestaurants);
app.get("/api/dates", recCtrl.getDates);

//______Favorites endpoints
app.get("/api/favorites", favCtrl.getFavorites);
app.post("/api/favorites", favCtrl.createFavorites);
app.delete("/api/favorites", favCtrl.deleteFavorites);

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});
app.listen(port, () => {
  console.log(`I am listening on port: ${port}`);
});
