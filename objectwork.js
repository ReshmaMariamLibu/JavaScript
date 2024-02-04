var product={
    code:"sku101",
    title:"oreo",
    category:"food",
    avlqty:50
}

console.log(product.title);

//chck price in object
if("price" in product){
    console.log("found");
}
else{
    console.log("not found");
}

//add price

product["price"]=30
console.log(product);