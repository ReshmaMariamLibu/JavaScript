//function functionName(p1,p2){

    //return function body

//}

//functionName(p1,p2) function calling

function maxTwo(num1,num2){
    return num1>num2?num1:num2
}

console.log(maxTwo(10,20));

//hoisting - calls fns before calling 

// 127,870
// first'th place 127 =compare last digits(1's place digit and  find the largest digit among the 2)and returns that digits number 

function nthDigitMax(num1,num2){
    return num1%10>num2%10?num1:num2
}
console.log(nthDigitMax(127,870));

//create a function nextPrime(num) 11,13

function isPrime(num){
    let isPrimeNumber=true
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrimeNumber=false
            break
        }
    
    }
    return isPrimeNumber
}
console.log(isPrime(11));

function nextPrime(num){
    let nextNum=num+1
    while(!isPrime(nextNum)){
        nextNum++

    }
    return nextNum
}
console.log(nextPrime(17));

// isFibinoNum(num) true/false

// nextFibinoNum(num)
function nextFibonocciNum(num){
    let a=0;
    let b=1;
    while (a<=num){
        let c=a+b;
        a=b;
        b=c;
    }
    return a;

}

console.log(nextFibonocciNum(5));








