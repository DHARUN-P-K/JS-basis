let a = 18.99;
let b = 7.99;
let c = 20.95;
let f = 4.99;
let d = (a+b+c).toFixed(2);
let e = (a+b+c+f).toFixed(2);
console.log("Total befor tax $",d);


console.log("Total with shippig $",e);



let tax =(e*0.1).toFixed(2);

console.log("Amount with 10% tax",tax);