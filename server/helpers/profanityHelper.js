const Filter = require('../profanityFilter/filter');
const filter  = new Filter({ placeHolder: '*'});

module.exports.applyProfanityFilter = (text)=>{
    let cleanText  ="";
    let isProfane =  filter.isProfane(text);
    if(isProfane){
        cleanText =  filter.clean(text);
    }
   return {
       "isProfane": isProfane,
       "text" : cleanText || text
   }

} 