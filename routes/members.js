var express = require('express');
var router = express.Router();
var { v4: uuidv4 } = require('uuid');
var { members } = require('./db');

/* GET MEMBER by Pani listing. */
router.get('/', function (req, res, next) {
  res.send(members);
});

router.get('/:id', function (req, res) {
  const member = members.find((member) => member.memberId == req.params.id);
  res.send(member);
});

router.post('/', function (req, res, next) {
  const newMember = {
    memberId: uuidv4(),
    name: req.query.name,
    mobId: req.query.mobId,
  };
  members.push(newMember);
  res.send(newMember);
});

router.delete('/:id', function (req, res) {
  const member = members.find((member) => member.memberId == req.params.id);
  members.pop(member);
  res.send(member);
});

module.exports = router;
