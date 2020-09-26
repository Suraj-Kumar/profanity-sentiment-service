const profanityFilterService = require("../helpers/profanityHelper"); 
const sentimentHelper = require("../helpers/sentimentHelper");
 
 function performNLP(req, res) {
    let reviews = req.body.reviews;
   let  response =[];
    if(reviews.length){
        for(let review of reviews){
            let sentimentResp = sentimentHelper.runSentimentAnalysis(review.description);
            let profanityResp = profanityFilterService.applyProfanityFilter(review.description);
            response.push(prepareResponse(profanityResp,sentimentResp, review));
        }; 
    }
    return res.json({data:response});
}


const prepareResponse =(profanityResp,sentimentResp, review ) =>{
return {
    id: review.reviewId,
    isProfane: profanityResp.isProfane,
    description: profanityResp.text,
    score : sentimentResp.comparative

}
}

module.exports ={
    performNLP : performNLP

}
