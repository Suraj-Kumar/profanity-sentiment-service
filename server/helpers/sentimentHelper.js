var Sentiment = require('sentiment');

const aposToLexForm = require('apos-to-lex-form');
const natural = require('natural');

module.exports.runSentimentAnalysis =(text)=>{
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);
   return result;
}



module.exports.doSentimentAnalysisUsingNatural =(text)=>{
    
    const lexedReview = aposToLexForm(text);
    const casedReview = lexedReview.toLowerCase();
    const alphaOnlyReview = casedReview.replace(/[^a-zA-Z\s]+/g, '');

    const { WordTokenizer } = natural;
    const tokenizer = new WordTokenizer();
    
    const tokenizedReview = tokenizer.tokenize(alphaOnlyReview);
}