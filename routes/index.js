var express = require('express');
var router = express.Router();

const controller = require('../controller/urlShortenerController');

router.get('/:code/stats', async (req, res) => {
    let code = req.params.code;
    const resultado = await Link.findOne({ where: { code: code } });
    if (!resultado) return res.sendStatus(404);
    const link_inteiro = `${process.env.DOMAIN}${resultado.code}`

    res.render('stats', { title: 'Encurtador', link: link_inteiro, resultado: resultado });
});

router.get('/:code', controller.shortUrl);


router.post('/new', controller.newUrl);


module.exports = router;
