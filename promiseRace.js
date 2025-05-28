Promise.myRace= function(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            throw(new Error("This is not an Array"))
        }
    
        const n = promises.length
        if(n===0){
            resolve()
            return;
        }

         promises.forEach((promise)=>{
            return Promise.resolve(promise).then(resolve).catch(reject)
        })
    
    })

}