function add(a,b){
    console.log( )
}


let newObject = {
    name:"Martin Luthor",
    age: 21
};

// console.log(newObject.name);
// let getDetails;
// let returnvalue = getDetails();
// let name = returnvalue.name;
// let age =  returnvalue.age;
// let{newname,newage}=getDetails(); 


let person = {
    name: "Martin Luthor",
    age: '34',

};
let newDetails = {
    ...person,
    role: "developer",
    company: "ABC",
    isMaried: false,
    salary:2.5,
};
console.log(newDetails)