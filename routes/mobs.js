var express = require('express');
var router = express.Router();

/* GET mobs listing. */
router.get('/mobs', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;