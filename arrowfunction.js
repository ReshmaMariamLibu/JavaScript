//arrow fn is not hoistable
//syntax

//add
var add=(n1,n2)=>n1+n2
console.log(add(100,200));


//sub
var sub=(n1,n2)=>n1-n2
console.log(sub(20,10));

//square
var square=(num)=>num**2
console.log(square(2));

//cube
var cube=(num)=>num**3
console.log(cube(3));

//maxnum
var maxNum=(n1,n2)=>n1>n2?n1:n2
console.log(maxNum(10,20));

//minNum
var minNum=(n1,n2)=>n1<n2?n1:n2
console.log(minNum(10,30));

//iseven

var isEven=(num)=>num%2==0?true:false
console.log(isEven(4));