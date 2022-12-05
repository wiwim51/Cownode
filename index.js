const cowsay = require("cowsay");
const userInfo = require("./information");

console.log(
  cowsay.say({
    text: `Hi, my name is ${userInfo.name} From ${userInfo.school}`,
    e: "oO",
    T: "U ",
  })
);
