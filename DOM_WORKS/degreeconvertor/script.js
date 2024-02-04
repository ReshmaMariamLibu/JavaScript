function degreeToFarhenheat(){
    let degreeCelsious=+box1.value
    let result= +(degreeCelsious)*(9/5)+32
    box2.value=result

    


}

function farhenheatToCelsious(){
    let farhenheat=+box2.value
    let result= +((farhenheat-32)*5/9)
    box1.value=result
    


}
