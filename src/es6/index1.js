// BEFORE: Js
let lorem = "lorem\n" + "te deseo";
console.log(lorem);
// lorem
// te deseo

// NOW: EcmaScript
let you = `i am person who worry about you
my live is just better 
witn you into`;
console.log(you);
// just use `` intead of '\n' to add a space between pharagraphs

// the way to access to any data of a object changed
let person = {
  name: "bryan",
  age: "22",
  country: "CO",
};
// Old way
console.log(person.name, person.age);
// New way, this is called 'Destructuring'
let { name, age } = person;
console.log(age);
// you choose what data set or call

// This is the new way to concatenate differents Arrays
let team1 = ["Bryan", "Robin", "Juan"];
let team2 = ["Laura", "Yesica", "Camila"];
// use this structure
let education = ["David", ...team1, ...team2];
console.log(education);

const obj = {
  name: "oscar",
  age: 32,
  country: "MX",
};

let { country, ...all } = obj;
console.log(all);
