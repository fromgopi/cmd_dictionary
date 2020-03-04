const axiosInstance = require('../config');
const appConstants = require('../constants');

module.exports = {
    getWordDefinition: async(word) => {
        axiosInstance.get('/word/'+word+'/definitions?api_key='+appConstants.api.key)
            .then(function(res){
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response);
            })
    },
    relatedwords: (word) => {
        let synonyms = {};
        let antonyms = {};
        console.log("Given word " + word);
        axiosInstance.get('/word/'+word+'/relatedWords?api_key='+appConstants.api.key)
            .then(function (responce) {
                let data = responce.data;

                for (let i = 0; i < data.length; i++) {
                    if (data[i].relationshipType === 'antonym'){
                        antonyms['relationshipType'] = 'antonym';
                        antonyms['words'] = data[i].words;
                    }
                    synonyms['relationshipType'] = data[i].relationshipType
                    synonyms['words'] = data[i].words;
                }
                console.log(synonyms);
            })
            .catch(err => {
                console.error(err.message);
            })
    }


};