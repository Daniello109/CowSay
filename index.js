const studentRequired = require("./information");
const cowsay = require("cowsay");
console.log(cowsay.say({
    text: `${studentRequired.name}`,
    e: "--",
    T: "U "
}));