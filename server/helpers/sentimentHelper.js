var Sentiment = require('sentiment');

const aposToLexForm = require('apos-to-lex-form');
const natural = require('natural');

module.exports.runSentimentAnalysis =(text)=>{
    console.log(text);
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);
   return result;
}



module.exports.doSentimentAnalysisUsingNatural =(text)=>{
}