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
