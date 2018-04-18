const axios = require("axios");
let places = [];

const headers = {
  ["Accept"]: "application/json",
  ["user-key"]: process.env.USER_KEY
};

const getRest = (req, res) => {
  const { q } = req.query;
  console.log(q);
  axios
    .get(`https://developers.zomato.com/api/v2.1/search?q=${q}`, {
      headers
    })
    .then(response => {
      places = response.data;
      console.log(response);
      res.status(200).json(places);
    })
    .catch(err => console.log(err));
};
module.exports = {
  getRest
};
