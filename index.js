const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

// accept command line arguments and parse the correct item
const inp = process.argv[2];
// run string through franc, outputs 3 letter language code
const langCode = franc(inp);

const langGuess = () => {
    try {
        const langName = langs.where('2', langCode).name;
        console.log(`Our Best Guess is: ${langName}`.green);
    } catch (e) {
        console.log('Language returned as undefined! Your input may be too short or contain grammatical errors.'.red);
        // console.log(e);
    } 
}

langGuess();

// build an object?
// const guessR = {
//     args: process.arv,
//     inp: args.slice(2)[0],
//     langCode: franc(inp),
//     langGuess: function () {
//         try {
//             const langName = langs.where('2', langCode).name;
//             console.log(langName.green);
//         } catch (e) {
//             console.log('Language returned as undefined! Your input may be too short or contain grammatical errors.'.red);
//             // console.log(e);
//         } 
//     }
// }




