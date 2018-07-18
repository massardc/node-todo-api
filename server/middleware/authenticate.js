const { User } = require('../models/user');

var authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject('No user found.');
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    // Authentication required status
    res.status(401).send(e);
  });
};

module.exports = {authenticate};