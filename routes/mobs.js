var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');

let mobs = [];

/* GET mobs listing. */
router.get('/', function (req, res, next) {
  res.send(mobs);
});

router.get('/:id', function (req, res) {
  const mob = mobs.find((mob) => mob.mobId == req.params.id);
  res.send(mob);
});

router.post('/', function (req, res, next) {
  const newMob = {
    name: req.query.name,
    mobId: uuidv4(),
  };
  mobs.push(newMob);
  res.send(newMob);
});

router.delete('/:id', function (req, res) {
  const mob = mobs.find((mob) => mob.mobId == req.params.id);
  mobs.pop(mob);
  res.send(mob);
});

module.exports = router;
