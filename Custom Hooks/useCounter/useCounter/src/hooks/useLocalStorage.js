import { useState } from "react";

const useLocalStorage = (key) =>{
   
    const setItem = () =>{
    const item = localStorage.setItem(key,JSON.stringify(key));
    console.log(key);
    return item;
    }
    const getItem = () =>{
        const item = localStorage.getItem(key);
        const parsedItem =  JSON.parse(item);
        console.log(parsedItem,"Parsed Item");
        return parsedItem;
    }
    const deleteItem = () =>{
        const item = localStorage.removeItem(key);
        console.log(key,"Successfully Deleted");
        return item;
    }
    return {setItem,getItem,deleteItem};
    
}


export default useLocalStorage;
