const Auth0Strategy = require("passport-auth0");

const { CLIENT_ID, CLIENT_SECRET, DOMAIN } = process.env;

const strat = new Auth0Strategy(
  {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    domain: DOMAIN,
    scope: "openid profile",
    callbackURL: "/auth"
  },
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
  }
);

const getUser = (req, res) => {
  console.log(req.user);
  if (!req.user) {
    res.status(401).json({ message: "Not Authorized" });
  } else {
    const dbInstance = req.app.get("db");
    dbInstance.getUserByAuthid(req.user.authid).then(person => {
      res.status(200).json(person[0]);
    });
    // res.status(200).json(req.user);
  }
};

const logout = (req, res) => {
  console.log("HIT");
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
  strat,
  getUser,
  logout
};
