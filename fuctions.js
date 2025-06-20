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

//////fitler, map, redeuce



let nums = [1,2,3,4,5];

let evens = nums.filter((n)=>{
    return(n%2===0);
});
console.log(evens);

let odd = nums.filter((n) => n%2===1);
console.log(odd);

let blist=[]
for(let i =0;i<nums.length;i++){
    if(nums[i]%2===0){
        blist.push(nums[i]);
    }


}console.log(blist);




let square = nums.map((n) => n*n );
console.log(square);


console.log("by reducing method");
let newsum = nums.reduce((sum,n)=>{
    return sum+ n;

},(sum = 0));
console.log(newsum);




