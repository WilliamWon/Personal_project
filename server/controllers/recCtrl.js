const axios = require("axios");
let bars = [];
let restaurants = [];
let dates = [];
let museums = [];
const key = process.env.USER_KEY;

const getBars = (req, res) => {
  const { q } = req.query;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=${key}`
    )
    .then(response => {
      bars = response.data;
      console.log(response);
      res.status(200).json(bars);
    })
    .catch(err => console.log(err));
};

const getRestaurants = (req, res) => {
  const { q } = req.query;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=${key}`
    )
    .then(response => {
      restaurants = response.data;
      //   console.log(response);
      res.status(200).json(restaurants);
    })
    .catch(err => console.log(err));
};

const getDates = (req, res) => {
  const { q } = req.query;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=${key}`
    )
    .then(response => {
      dates = response.data;
      //   console.log(response);
      res.status(200).json(dates);
    })
    .catch(err => console.log(err));
};

const getMuseums = (req, res) => {
  const { q } = req.query;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=${key}`
    )
    .then(response => {
      museums = response.data;
      //   console.log(response);
      res.status(200).json(museums);
    })
    .catch(err => console.log(err));
};

module.exports = {
  getBars,
  getRestaurants,
  getDates,
  getMuseums
};
