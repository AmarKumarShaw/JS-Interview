// Here we will flatten the array 


function FlattenArr(arr){
    if(!Array.isArray(arr)){
        throw new Error("This is an not a perfect array")
    }
    return arr.reduce((acc,curr)=>{
        return Array.isArray(curr) ? FlattenArr(curr) :  acc.concat(curr)
    },[])

}