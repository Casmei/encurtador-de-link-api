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

router.get('/:code', async (req, res) => {
    const code = req.params.code;
    const link = await Link.findOne({ where: { code } });
    if (!link) return res.sendStatus(404);

    link.clicks++;
    await link.save();

    res.redirect(link.url);

});

router.get('/', function (req, res, next) {
    res.render('index', { title: 'Encurtador' });
});

generateCode = () => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

router.post('/new', controller.newUrl);


module.exports = router;
