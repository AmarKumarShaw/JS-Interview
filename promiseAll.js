Promise.myPromiseAll =  function (promises){
    return new Promise((resolve,reject)=>{

        // Agar yeh promises array mei nhi hai toh error maaro 
        if(!Array.isArray(promises)){
            reject(new Error ("This is a new Reject Error"))
        }

        // Sara result empty array mei store hoga 
        const result = [];
        let promiseCount = 0;
        const n = promises.length

        // Yaha check kar rhe hai ki agar kuch bhi passed nhi hai toh empty result push kar do
        if(n===0){
            resolve(result)
            return;
        }

        //Yaha par aap async se every promise ko chalake dekh rhe ho and then 
        // Dekh rhe ho ki sab sahi hai yah nahi sbko resolve one by one index mei place kar
        // rhe ho aur error ko direct reject kar de rhe ho  
        promises.forEach(async(promiseFunc,index)=>{
            try{
                const res  = await promiseFunc;
                result[index] = res
                promiseCount += 1; 
                if(promiseCount === n){
                    resolve(result)
                }
            }catch(err){
                reject(err)
            }
        })


    })
}


// Summary : 
// Yaha pe hamlog promise.all 2 condition check karenge then 
// uspe for each lgake result kar denge thik se map karke result de degne 

// Two Conditions :
// - Input array hai yah nhi
// - Agar empty hai toh bhi return resolve hi kar hai