var num1=12
var num2=24
var minNum=num1<num2?num1:num2
var gcd=1

for(let i=2;i<=minNum;i++){
    if(num1%1==0 && num2%1==0){ //i=2,,,,,,,,,,,,,,,,12
        gcd=i
    }
}
console.log(gcd);

