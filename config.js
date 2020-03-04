const axios = require('axios').default;
const appConstant = require('./constants');

// Axios Instance to call external API.
const instance = axios.create({
    baseURL: appConstant.api.url
})

module.exports = instance;