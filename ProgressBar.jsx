import React,{useState,useEffect} from "react";

const ProgressBar = () =>{
    const [progress,setProgress] = useState(0)
    useEffect(()=>{
        duration  = 2000
        steps = 100
        const intervalTime = duration/steps
       
        const interval = setInterval(()=>{
            setProgress((prev)=> {
                if(prev >=100){
                    return 100 ;
                }
                return prev+1
            })
        },intervalTime)
        
            //Cleanup Function
        return () => clearInterval(interval)
    },[])

return(
        <div>
            <h1>this is Progress bar</h1>
        </div>
    )
}

export default ProgressBar