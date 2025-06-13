Promise.myRace = function(promises){
    return new Promise((resolve,reject)=>{
        for (let p of promises){
            Promise.resolve(p).then(resolve,reject)
        }
    })
}