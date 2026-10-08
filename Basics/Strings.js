const name = "farhan"

const repoCount = 50;

// console.log(name + repoCount + "new setup");  old way

//string interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hi boi')
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-4, 4)
console.log(anotherString);

const newStringOne = "      bear "
console.log(newStringOne.trim());


const url = "https://farhan.com/charizrad%20pokemon"

console.log(url.replace('%20', '-'))

console.log(url.includes('flame'));

console.log(url.split('/'));














