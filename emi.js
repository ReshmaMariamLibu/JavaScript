var loanAmount=200000;
var interestRate=9;
var tenure=20; //years

var p=loanAmount
var r=interestRate/12
var i=r/100
var n=tenure*12

var onePlusi=(1+i)**n
var EMI=(p*i*onePlusi)/(onePlusi-1)
//console.log(EMI)
console.log(Math.round(EMI));


//monthly emi

// EMI=P*I*(1+i)^n)/(1+i)^n-1
// p=loanAmount
// r=interestRate/12 //monthly interest
// i=r/100
// n=tenure*12 //month




