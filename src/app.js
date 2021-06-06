const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const joinedPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialPath);
app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(joinedPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "akhil",
    name: "ahaaaaaaaa",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "okmanmns",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "good help",
  });
});
app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "not help found baba",
  });
});
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("erroeeee");
  }
  // res.send(req.query.address);
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, foreCastdata) => {
        if (error) {
          return res.send({ error });
        }

        res.send({
          forecast: foreCastdata,
          location,
          address: req.query.address,
        });
      });
    }
  );
});
app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send("babu no serach");
  }
  console.log(req.query.search);
  res.send({
    products: [],
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "not found baba",
  });
});
app.listen(3000, () => {
  console.log("running baba");
});
