// [] =defines array
// length is not fixed

var languages=["python","java","js","c+"]

console.log(languages[1]);

for(let i=0;i<languages.length;i++){
    console.log(languages[i]);
}

//php - update java to php
languages[1]="php"
console.log(languages);

//push()= to add new object to last position
languages.push("c#")
console.log(languages);

//unshift() = to add new object to beginning position
languages.unshift("c")
console.log(languages);

//pop() = to remove object from last position

languages.pop()
console.log(languages);

//shift() = removes object from beginning position
languages.shift()
console.log(languages);

//reverse()
languages.reverse()
console.log(languages);

//map()=> applies function to each of the object
// contains only one parameter

var arr=[10,2,3,14,15]

//squares

var  sq=arr.map((n)=>n**2)
console.log(sq);

//cube

var cube=arr.map((n)=>n**3)
console.log(cube);


//filter()=> contains only one parameter

//even numbers
var evenNum=arr.filter((n)=>n%2==0)
console.log(evenNum);


//numGtFive
var numGtFive=arr.filter((n)=>n>5)
console.log(numGtFive);

//reduce() 
// contains 2 parameters

//sum
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

//product
var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product);

//maxNum
var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxNum);

//minNum
var minNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNum);

//sort()=>contains 2 parameters

//decending order
var srt=arr.sort((obj1,obj2)=>obj2-obj1)
console.log(srt);

//accending
var srt=arr.sort((obj1,obj2)=>obj1-obj2)
console.log(srt);



