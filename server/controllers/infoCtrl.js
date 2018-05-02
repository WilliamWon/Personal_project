const postInfo = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { username, email, street_address, city, myState, zipcode } = req.body;
  const { authid } = req.params;

  dbInstance
    .addInfoByUserid([
      username,
      email,
      street_address,
      city,
      myState,
      zipcode,
      authid
    ])
    .then(user => res.status(200).send(user))
    .catch(() => res.status(500).send());
};

module.exports = {
  postInfo
};
