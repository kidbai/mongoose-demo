var express = require('express');
var router = express.Router();

router.use('/:user', function(req, res) {
    res.render('userInfo', {username: 'youngbye'});
});

module.exports = router;
