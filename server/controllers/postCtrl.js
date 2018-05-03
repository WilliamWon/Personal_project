let posts = [];

const getPosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;

  dbInstance
    .getPostsById([id])
    .then(response => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch(err => res.status(500).send(err));
};

const updatePosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id } = req.params;
  const { text, locationId } = req.body;

  dbInstance
    .updatePostsById([id, text, locationId])
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};

const createPosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { username, text, time, userid, locationid } = req.body;

  dbInstance
    .addPosts([username, text, time, userid, locationid])
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(500).send(err));
};

const deletePosts = (req, res, next) => {
  const dbInstance = req.app.get("db");
  const { id, locationId } = req.params;

  dbInstance
    .deletePostsById([id, locationId])
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};

module.exports = {
  getPosts,
  updatePosts,
  createPosts,
  deletePosts
};
