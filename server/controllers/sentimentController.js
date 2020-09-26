
const sentimentHelper = require("../helpers/sentimentHelper");
module.exports.doSentimentAnalysis =  (req, res)=>{
    let text = req.body.text;
    let sentimentResp = sentimentHelper.runSentimentAnalysis(text);
    res.json(sentimentResp);
}


module.exports.doSentimentAnalysisUsingNatural = (req, res)=>{

    let text = req.body.text;
    let sentimentResp = sentimentHelper.doSentimentAnalysisUsingNatural(text);
    res.json(sentimentResp);

}