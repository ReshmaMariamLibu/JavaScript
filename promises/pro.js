var myPromise=new Promise((res,rej)=>{
    let completedStatus=true
    if(completedStatus==true){
        res("completed")
    }
}

)

myPromise.then(res=>console.log("name will be marked in placement form"))// if promise is success we use 'then' ,if reject then we use 'catch'