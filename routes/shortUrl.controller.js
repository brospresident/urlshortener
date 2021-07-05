const { addNewUrl, stringIsAValidUrl, getUrl } = require('../models/shortUrl.model');

function httpAddShortUrl(req, res) {
    const input = req.body;

    const isValid = stringIsAValidUrl(input.url);

    if (!isValid) {
        return res.status(400).json({
            error: 'invalid url'
        })
    }

    return res.status(200).json(addNewUrl(input.url));
}

function httpGoToUrl(req, res) {
    const id = +req.params.id;

    const urlObj = getUrl(id);

    return res.redirect(urlObj.original_url);
}

module.exports = {
    httpAddShortUrl,
    httpGoToUrl
}