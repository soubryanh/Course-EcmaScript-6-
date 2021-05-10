// follow the next steps to declarate a class, this is the structure we need to learn to work with POO/OOP Object-oriented programming
class calculator {
  // we use the phrase 'class' to indicate we define a class
  constructor() {
    //   use the constructor to asigne variables on the SCOPE GLOBAL
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    //   'sum' is a method which you push some values A y B
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(32, 32));
// use this to split your code and make it more organized. Use it to import an API or having a code apart or your elements
import { hello } from "./module";

hello();

// GENERATOR function.
// it has a special syntaxis. fibonacci
function* helloWorld() {
  if (true) {
    yield "holiwis, ";
  }
  if (true) {
    yield "mundibiris";
  }
}
const generatorHoliwis = helloWorld();

console.log(generatorHoliwis.next().value);
console.log(generatorHoliwis.next().value);
console.log(generatorHoliwis.next().value);
