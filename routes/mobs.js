var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
var { mobs, members } = require('./db');

/* GET mobs listing. */
router.get('/', function (req, res, next) {
  res.send(mobs);
});

router.get('/:id', function (req, res) {
  const mob = mobs.find((mob) => mob.mobId == req.params.id);
  res.send(mob);
});

router.get('/:id/members', function (req, res) {
  const mobMembers = members.filter((mob) => mob.mobId == req.params.id);
  res.send(mobMembers);
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
