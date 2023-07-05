const router = require('express').Router();
module.exports = router;

router.use('/mushrooms', require('./mush'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
