var weightin_kg=65
var heightin_cm=165
var height_m=heightin_cm/100
var bmi=weightin_kg/(height_m**2)
console.log("bmi");

if(bmi<20){
    console.log("is under weight");
}
    
else if(bmi>=20 && bmi<25){
    console.log("is normal");
}
else if(bmi>=25 && bmi<30){
    console.log("over weight");
}
else if(bmi>=30){
    console.log("obseity");
}
    
