// we'll see all new changes on JavaScript-EcmaScript
// first let's take a look about how worked the old version
function newFuntion(name, age, country) {
  let name = name || "bryan";
  let age = age || 22;
  let country = country || "CO";
}

// now with ES6 you can do this
function newFunction2(name = "oscarito", age = 32, country = "MX") {
  console.log(name, age, country);
}
// to call a function there are two ways
// in some cases you can leave it empty and it will take the default parameters
newFunction2();
newFunction2("bebesote", "23", "USA");
// this is the old way to concatenate
let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
// this's the new way to concatenate elements or code
// it's called "templates literal"
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
// keep in mind you are calling the value of the variable when you use the '${}' don't forget the ""
