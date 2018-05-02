let posts = [];

const getPosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .getPostsById([id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const updatePosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id, text } = req.body;

  dbInstance
    .updatePostById([id, text])
    .then(() => res.status(200).send())
    .catch(() => res.status(500).send());
};

const createPosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { username, text, time, userid, locationid } = req.body;

  dbInstance
    .addPosts([username, text, time, userid, locationid])
    .then(resp => res.status(200).send(resp))
    .catch(() => res.status(500).send());
};

const deletePosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  // const {}
};

module.exports = {
  getPosts,
  updatePosts,
  createPosts
};
