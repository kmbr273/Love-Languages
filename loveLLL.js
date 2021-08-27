console.log("You can better understand yourself by understanding your love language and things you would like based on that ")
const firstNum = ["Words of Affirmation - words speak louder than actions", "Acts of Service - shown rather than told", "Receiving Gifts - thoughtful gifts from your partner", "Quality Time - spending time with your partner", "Physical Touch - you enjoy physical touch from your partner"];
const secondNum = ["Dinner and a movie", "Camping under the stars", "Working out together", "Concert", "Picnic in the park "];
const thirdNum = ["Scented candle", "Coffee machine", "Back massager", "Jewelry", "Wine and cheese board set"];

const loveFortune =  (array) => {
    output = Math.floor(Math.random() * array.length);
    return array[output];
}
console.log(`Your love language is ${loveFortune(firstNum)},`);
console.log(`An ideal date for you would be ${loveFortune(secondNum)},`);
console.log(`The best gift for you would be ${loveFortune(thirdNum)}`);
