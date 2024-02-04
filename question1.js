//merege these two strings
//o/p = APBQCR
var firstString="ABC"
var secondString="PQRST"
var mergedString=""

var smallestString=firstString.length<secondString.length?firstString:secondString
for(let i=0;i<smallestString.length;i++){
    sub=firstString[i]+secondString[i]
    mergedString=mergedString+sub

}
//if is used if two string has different length
if(firstString.length>secondString.length){
    let balance=firstString.slice(smallestString.length,)
    mergedString=mergedString+balance
}
else{
      let balance=secondString.slice(smallestString.length,)
      mergedString=mergedString+balance
}

console.log(mergedString);

// for (let i=0;i<firstString.length;i++){
//     console.log(firstString[i]);
// }