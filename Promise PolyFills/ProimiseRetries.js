function retryPromise(fn,retries=3,delay){
    return new Promise((resolve,reject)=>{
        fn().then(resolve).catch((err)=>{
            attempt = (n) =>{
                if(n===0){
                    reject("Number of Attempt exceeded",err)
                }
                else{
                    setTimeout(()=> attempt(n-1),delay)
                }
            }
        })
        attempt(retries)
    })
}