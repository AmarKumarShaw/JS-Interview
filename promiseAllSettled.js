Promise.myAllSettled = function(promises){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(promises)){
            throw(new Error("This is not an array"))
        }
        const n = promises.length
        if(n===0){
            resolve({status:"success",value:""})
            return;
        }
        const result=[]
        promises.forEach(async(promise,index)=>{
           try{
            const res = await promise;
            const obj = {status:"fulfilled",value:res}
            result[index] = obj
            if(index ===n-1){
                resolve(result)
                return;
            }
           }catch(err){
            const obj= {status:"fulfilled",value:err}
            result[index] = obj;
            if(index === n-1){
                resolve(result)
                return;
            }

           }
        })

    })
}