// Polyfill for PromiseAll 
// Explanation ->  Promise.all means all the promises has been resolved and if anyone get anyone rejected it
// will throw an error as soon as it get error it will be rejected

Promise.MyAll = function (promises){
    Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            return reject (new Error("It is not a perfect Array"))
        }
        
        let results = [];
        let remaining  = promises.length;

        if(remaining ===0){
            resolve([])
        }
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then(value =>{
                results[index] = value;
                remaining = remaining - 1 ;
                if(remaining==0){
                    resolve(results)
                }
            }).catch(err =>{
                reject(err)
            })
        })


    })
}