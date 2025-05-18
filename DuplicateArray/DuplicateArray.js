// Removing Duplicate Items from an Array 

const arr = [1,2,4,5,5,6,6,7]

// Using Filter Method  

const results  = arr.filter((data,index)=> arr.indexOf(data) === index )
console.log(results)


// Using Reduce Method 

const result = arr.reduce((acc,curr)=>{
    if(!acc.includes(curr)) acc.push(curr)
        return acc
        
},[])
console.log(result)