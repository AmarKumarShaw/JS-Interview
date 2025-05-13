Promise.myPromiseAll =  function (promises){
    return new Promise((resolve,reject)=>{

        // Agar yeh promises array mie nhi hai toh error maaro 
        if(!Array.isArray(promises)){
            reject(new Error ("This is a new Reject Error"))
        }


        const result = [];
        let promiseCount = 0;
        const n = promises.length

        // Yaha check kar rhe hai ki agar kuch bhi passed nhi hai toh result push kar do
        if(n===0){
            resolve(result)
            return;
        }

        // Yeh hai main function yaha aap main
        // arrray revist kark value place kar rhe ho 
        // aur count bda rhe ho jais hi count match kar pura data 
        // ka result ekbaar mei mil jayega
        promises.forEach(async(promiseFunc,index)=>{
            try{
                const res  = await promiseFunc;
                result[index] = res
                promiseCount += 1;
                if(promiseCount === n ){
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