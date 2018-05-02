const axios = require("axios");
let places = [];
const key = process.env.USER_KEY;

const getPlaces = (req, res) => {
  const { q } = req.query;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=AIzaSyAgVlDiYju9Uzz4BCmEYqHXCDb8G31byO4`
    )
    .then(response => {
      places = response.data;
      //   console.log(response);
      res.status(200).json(places);
    })
    .catch(err => console.log(err));
};
module.exports = {
  getPlaces
};
