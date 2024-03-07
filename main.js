const users = require("./users.json");
const { getUserInfo, capitalizeFirstLetter: cfl } = require("./utils");

// for (let user of users) {
//     console.log(getUserInfo(user));
// }

console.log(cfl("a"));
console.log(cfl("ab"));
console.log(cfl("abc"));


// console.log(users);

// function greet (name) {
//     console.log(`Hello, ${name}!`);
// }

// export default greet; 
// module.exports = greet; 