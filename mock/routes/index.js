var express = require('express');
var router = express.Router();

// Routes
var players = require('./players/');

router.get('/', function(req, res) {
    res.send('Hello NBA');
});

router.use('/players', players);

module.exports = router;