const Link = require('../models/Link');

generateCode = () => {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
exports.newUrl = async (req, res) => {
    const url = req.body.url;
    if (!url) return res.json(400, { error: 'URL inválida' });

    const code = generateCode();
    const resultado = await Link.create({
        url,
        code
    });
    if (!resultado) return res.json(500, { error: 'Erro ao criar o link' });

    const link_inteiro = `${process.env.DOMAIN}${resultado.code}`
    res.json(200, link_inteiro);
}

exports.shortUrl = async (req, res) => {
    const code = req.params.code;
    const link = await Link.findOne({ where: { code } });
    if (!link) return res.json(400, { "msg": "Link inválido" });

    link.clicks++;
    await link.save();

    res.redirect(link.url);

}

exports.stats = async (req, res) => {
    let code = req.params.code;
    const resultado = await Link.findOne({ where: { code } });
    if (!resultado) return res.json(404, { "msg": "Link inválido" });

    const link_inteiro = `${process.env.DOMAIN}${resultado.code}`

    res.json('200', { "url": link_inteiro, resultado });
}
