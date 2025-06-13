Promise.myAny = function(promises){
    return new Promise((resolve,reject)=>{
        let rejections = [];
        let pending = promises.length;

        let hasResolved = false;

        if(pending ===0){
       throw (new Error("Array is empty"))
        }
        promises.forEach((promise,index)=>{       
                Promise.resolve(promise).then(value=>{
                if(!hasResolved){
                    hasResolved = true
                    resolve(value);
                }
            }).catch(err=>{
               
                rejections[index] = err;
                pending--;
                if(pending ==0 &&!hasResolved){
                    reject(new AggregateError(rejections,"All are rejected"))
                }
            })


        })




    })
}