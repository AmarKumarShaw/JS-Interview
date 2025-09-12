import { useState } from "react";

const useCounter = (initialState=0)=>{
    const [count,setCount] = useState(initialState);
    const increment = () =>{
        setCount((prev)=> prev+1)
    }
    const decrement = () =>{
        if(count === 0) return;
        setCount((prev)=> prev-1)
    }
    const reset = () =>{
        setCount(initialState)
    }

    return {
        count,
        increment,
        decrement,
        reset,
    }

}

export default useCounter;