const getFavorites = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { user } = req.body;

  dbInstance
    .getFavoritesById([user])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const createFavorites = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, address, rating, id, userid } = req.body;

  dbInstance
    .createFavoritesById([name, address, rating, id, userid])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const deleteFavorites = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { name, address, rating, userid } = req.body;

  dbInstance
    .deleteFavoritesById([name, address, rating, userid])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getFavorites,
  createFavorites,
  deleteFavorites
};
