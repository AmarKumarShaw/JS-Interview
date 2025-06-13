// Here we will flatten the array 


function FlattenArr(arr){
    if(!Array.isArray(arr)){
        throw new Error("This is an not a perfect array")
    }
    return arr.reduce((acc,curr)=>{
        return Array.isArray(curr) ? FlattenArr(curr) :  acc.concat(curr)
    },[])

}

// Depth wise flattning of an array 

function flattenArray(arr,depth=2){
    if(depth<1) return arr;
    let result=[];

    for (let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item,depth-1))
        }else{
            result.push(item)
        }
    }
    return result;
}