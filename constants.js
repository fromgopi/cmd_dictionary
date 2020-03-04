require('dotenv').config();
const appConstants = {
    api:{
        url: process.env.HOST_URL,
        key: process.env.API_KEY
    }
}

module.exports = appConstants;