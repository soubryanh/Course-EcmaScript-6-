let name = "bryan";
let age = 32;

// es5
obj = { name: name, age: age };
// es6
obj2 = { name, age };
console.log(obj2);

const names = [
  { name: "bryan", age: 22 },
  { name: "andrea", age: 20 },
];

// Arrow function 'anonymous'
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
// new versions, use this when you need more than one element
let listOfNames2 = names.map((item) => console.log(item.name));
// another way to use the arrow function
const listOfNames3 = (name, age) => {
  code;
};
// use this when you just need a only attribute or something individual
const listOfNames4 = (name) => {
  code;
};
// this is a new function to make a operation with the arrow function. you receive the return at the end
const square = (num) => num * num;

// '=>' this is the simbol of Arrow function
// all in the const helloPromise is the promise
// you have to set the option to resolve and reject. always!
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hurra!");
    } else {
      reject("Yapeeer!");
    }
  });
};

helloPromise()
  // follow the next structure to show the anwser with '.then' and use '.catch' to reject.
  .then((vive) => console.log(vive))
  //   you can use more than one '.then' in a promise
  .then(() => console.log("wola"))
  .catch((muere) => console.log(muere));
