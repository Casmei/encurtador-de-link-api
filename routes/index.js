var express = require('express');
var router = express.Router();

const controller = require('../controller/urlShortenerController');

router.get('/:code/stats', controller.stats);

router.get('/:code', controller.shortUrl);


router.post('/new', controller.newUrl);


module.exports = router;
