//keywords:var,let,const(default keyword if no keyword is assigned:var)

// 'const' cannot be modified bt 'var' and 'let' can be modified
// var is global scope ,let is block scope(it works only within that block),const is constant keyword

// var variableName=value

// var companyName="Amazon"
// const companyName="Amazon"
let companyName="Amazon"
console.log("company name is",companyName);
companyName="Luminar Technolab"
console.log("company name",companyName);

var bankName="sbi"
var acno="1234567"
var balance="30000"

// hi user your 1234567 sbi account balance is 30000
// console.log("hi user your",acno,bankName,"account balance is",balance);
console.log(`hi user your ${acno} ${bankName} account balance is ${balance}`);


var customerName="vipin"
var purchaseAccount="320"
var invoiceNum=6197

// dear vipin ,you have made purchase at RS.320 vide inv.no6197
console.log(`dear ${customerName} ,you have made purchase at RS.${purchaseAccount} vide inv.no${invoiceNum}`);