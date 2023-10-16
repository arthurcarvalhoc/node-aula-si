var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.post('/login', function(req, res, next) {

  const {login, senha} = req.body;
  console.log( login, " - ",senha);

  if( login == 'admin'){
    res.render('home', { title: 'Express' });

  }else{
    res.render('login', { title: 'Express' });
  }


});


module.exports = router;
