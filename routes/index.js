var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express' });
});


/* GET home page. */
router.get('/page3', function(req, res, next) {
  res.render('page3', { title: 'Express' });
});


module.exports = router;
