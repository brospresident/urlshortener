const shortUrls = [];
const URL = require("url").URL;

function stringIsAValidUrl(s) {
    try {
        new URL(s);
        return true;
    } catch (err) {
        return false;
    }
};

function addNewUrl(url) {
    let obj = {
        original_url: url,
        short_url: shortUrls.length
    };
    shortUrls.push(obj);
    return shortUrls[shortUrls.length - 1];
}

function getUrl(id) {
    return shortUrls[id];
}

module.exports = {
    addNewUrl,
    stringIsAValidUrl,
    getUrl
}