let mun = [];

let a = 0;
while(a < 15) {
    if(a == 3) {
        mun.push("dog");
    }
    if(a == 7) {
        mun.push("cat");
    }
    if(a==10){
        mun.push("monkey");
    }
    if(a==12){
        mun.push("donkey");
    }
    if(a==13){
        mun.pop();
    }
    console.log(a);
    a++; 
}
console.log(mun);
