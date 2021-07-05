const express = require('express');

const { httpAddShortUrl, httpGoToUrl } = require('./shortUrl.controller')

const shortUrlRouter = express.Router();

shortUrlRouter.post('/', httpAddShortUrl);
shortUrlRouter.get('/:id', httpGoToUrl)

module.exports = shortUrlRouter;