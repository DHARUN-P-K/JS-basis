let fruits = ["apple","mango","grapes"];
console.log("original array");
console.log(fruits);

fruits.pop();
console.log("after pop");
console.log(fruits);

fruits.push("green");
console.log("after push");
console.log(fruits);

console.log(fruits.length);
console.log(fruits[1]);

fruits.unshift("bell");
console.log(fruits)

fruits.shift()
console.log(fruits)


fruits.splice(1,3)
console.log(fruits)



//spread operator
console.log(fruits);
let newarray = [...fruits,"A","B"];
console.log(newarray);
console.log(fruits);

