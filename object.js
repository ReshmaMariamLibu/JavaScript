var student={
    id:2,
    name:"vijay",
    course:"django",
    gender:"male"

}
console.log(student.name);
console.log((student.name));

//adding new attribute
//dictionary_name["key"]:value;

//objectName["attribute"]=value;

student["email"]="vijay@gmail.com"
console.log(student);

//how to chk an attribute exit in object
//"key" in dictinory
//"attribute" in object
console.log("name" in student);
console.log("contact" in student);