const profanityFilterService = require("../helpers/profanityHelper"); 
 
 function applyProfanityFiltercheck(req, res) {
    let sentance = req.body.text;
    let data = profanityFilterService.applyProfanityFilter(sentance);
    return res.json({data});
}


module.exports ={
    applyProfanityFiltercheck : applyProfanityFiltercheck

}