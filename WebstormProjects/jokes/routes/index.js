var express = require('express');
var jokes = require('../model/jokes');
var router = express.Router();

var newJoke = "";

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jokes', function(req, res, next){
    res.render('jokes', {title: jokes.getRandomJoke})
})
router.get('/alljokes', function(req, res, next){
    res.render('jokes', {title: jokes.allJokes})
})

router.post('/addJoke', function(req, res){
    newJoke = req.body.addJoke;
    jokes.addJoke(newJoke);
    res.render('addJoke.jade')

})

router.get('/storeJoke', function(req, res){
    res.redirect('/addJoke');
})

router.get('/login', function(req, res, next) {
    res.render('login.jade');
});

module.exports = router;
