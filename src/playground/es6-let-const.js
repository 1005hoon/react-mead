var nameVar = "Hoon";
nameVar = "Jamie";
var nameVar = "Some Var Name";
console.log("nameVar", nameVar);

let nameLet = "Hoon";
nameLet = "Jamie";
let nameLet = "Some Let Name"; // NOOOOOOOOOOOO
console.log("nameLet", nameLet);

const nameConst = "Hooon";
nameConst = "Jamie"; // NOOOOOOOOOOOOOOOOOO
const nameConst = "Some Const Name"; // NOOOOOOOOOOOOOOOOOOOOOOOOOOO
console.log("nameConst", nameConst);

var fullName = "Seunghoon Oh";

if (fullName) {
  var firstName = fullName.split(" ");
  console.log(firstName);
}

console.log(firstName); // it works because its block level scope
// const and let doesn't work
