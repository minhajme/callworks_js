const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sb-admin-2/index', { title: 'Express' });
});

module.exports = router;
