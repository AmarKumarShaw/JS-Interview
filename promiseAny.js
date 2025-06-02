if(!Promise.any){
    Promise.any = function (promises){
        return new Promise((resolve,reject)=>{
            let errors=[];
            let rejections = [];
            const total = promises.length;
            if(total.length ===0){
                reject(new AggregateError([],"Empty Array Passed"))
            }
            promises.forEach((p,i)=>{
                Promise.resolve(p).then(
                    resolve,
                    reject,
                    err=>{
                        errors[i]= err;
                        rejections++;
                        if(rejections ===total){
                            reject(new AggregateError(errors,"All promises are rejected"))
                        }
                    }
                )
            })
        })
    }
}