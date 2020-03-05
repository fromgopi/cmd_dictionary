const axiosInstance = require('../config');
const appConstants = require('../constants');


async function relatedwords(word) {
    console.log(word + " Given Word");
    return (await axiosInstance.get('/word/' + word + '/relatedWords?api_key=' + appConstants.api.key)).data;
}

async function examples(word){
    return (await axiosInstance.get('/word/'+word+'/examples?api_key='+appConstants.api.key)).data;
}

async function wordOfTheDay() {
    let wordOfDay = {};
    let word = '';
    try {
        const response =  await axiosInstance.get('/words/randomWord?api_key='+appConstants.api.key);
        if (response && response.status === 200){
            word = response.data.word;
            wordOfDay['word'] = word;
            wordOfDay['data'] = await relatedwords(word);
            wordOfDay['examples'] = await examples(word);
            console.log(wordOfDay);
        } else{
            console.warn("Failed to get information");
        }
    } catch (e) {
        console.warn(e.message);
    }
}

async function getWordDefinition(word) {
    axiosInstance.get('/word/'+word+'/definitions?api_key='+appConstants.api.key)
        .then(function(res){
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response);
        })
}

async function getSynonymOfWord (word) {
    const synonyms = await relatedwords(word, 'synonym');
    setTimeout(() => {
        console.log(synonyms);
    }, 2000)
}


async function getAntonymOfWord(word){
    const antonym = await relatedwords(word, 'antonym');
    setTimeout(() => {
        console.log(antonym);
    }, 2000)
}

module.exports = {
    wordOfTheDay, getWordDefinition,
    getSynonymOfWord,
    getAntonymOfWord
};