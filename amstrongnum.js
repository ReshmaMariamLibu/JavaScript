var num=153
var original=num
var digitCount=String(num).length
var sum=0

while(num!=0){
    let digit= num%10
    let pow=digit**digitCount
    sum=sum+pow
    // console.log(digit)
    num=Math.floor(num/10)
}
if(sum==original){
    console.log("Amstrong number");
}
else{
    console.log("not amstrong number");
}

// console.log(sum);
