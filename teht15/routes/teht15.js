var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('eka kohta teht15 tässä');
});


module.exports = router;
