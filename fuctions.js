function hello(){
    console.log("Hello JS");

}
hello();


function add(a,b){
    console.log(a+b)

};
add(5,9);



function displayAnotherFunction(fun){
    fun(1,2)
};
displayAnotherFunction(add);



let varfun = add;
varfun(1,4);




let newFunVar = function(){
    console.log("variable fuction");

};newFunVar();


const arrowFunVar = () =>
{
    console.log("Array Fuctions")

};
arrowFunVar();

