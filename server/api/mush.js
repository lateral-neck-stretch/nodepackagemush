const router = require('express').Router();
const Mush = require('../db');

router.get('/:id', async (req, res, next) => {
  try {
    const mush = await Mush.findOne({
      where: {
        id: req.params.id,
      },
      include: Campus,
    });

    if (student === null) {
      res.status(404).send();
      return;
    }

    res.send(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
