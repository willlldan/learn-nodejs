const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("wil@gmail.com"));
// console.log(validator.isMobilePhone("+628132232232", "id-ID"));
// console.log(validator.isNumeric("628132232232"));

const name = "Will";
console.log(chalk.italic.black.bgBlue("Hello will"));
const message = chalk`Lorem ipsum dolor {bgBlue sit amet}, consectetur {bgGreen.black adipiscing} elit, sed do. My name is ${name}`;
console.log(message);
