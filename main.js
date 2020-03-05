#! /usr/local/bin/node
const dictapi = require('./apis/dict');
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');
// dictapi.getWordDefinition(word);
// /dictapi.relatedwords(word);
// dictapi.getSynonymOfWord(word);
// dictapi.getAntonymOfWord(word);

if (process.argv.length === 2){
    console.log("Getting Word of the Day.");
    dictapi.wordOfTheDay();
}

