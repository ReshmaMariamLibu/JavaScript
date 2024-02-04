function displaynumber(num){
    result.value+=num
}

function clearBox(){
    result.value=""
}

function evalExpression(){
    let currentExpression=result.value
    let output=eval(currentExpression)
    result.value=output
}

function backSpace(){
    let currentValue=result.value.slice(0,-1)
    result.value=currentValue
}