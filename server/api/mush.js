const { Op } = require('sequelize');

const router = require('express').Router();
const Mush = require('../db/models/Mush');

router.get('/', async (req, res, next) => {
  try {
    console.log(`query is`);
    console.log(req.query);
    const mush = await Mush.findOne({
      where: {
        minLat: {
          [Op.lte]: +req.query.lat,
          // [Op.lte]: 0,
        },
        maxLat: {
          [Op.gte]: +req.query.lat,
        },
        minLong: {
          [Op.lte]: +req.query.long,
        },
        maxLong: {
          [Op.gte]: +req.query.long,
        },
      },
    });

    if (mush === null) {
      res.status(404).send();
      return;
    }

    res.send(mush);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
