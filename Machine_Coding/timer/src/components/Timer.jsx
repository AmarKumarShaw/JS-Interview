import React,{useState,useRef,useEffect} from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0);
    const [countDown,setCountDown]=useState(false)
    const intervalRef = useRef();

    useEffect(() => {
     intervalRef.current = setInterval(() => {
        setTimer((prev)=>{
           if(!countDown){
            if(prev >=10){
                setCountDown(true)
                return prev-1
            }
            return prev+1
            
           }
           if(countDown){
            if(prev<=0){
                setCountDown(false)
                return prev-1;
            }
            return prev-1;
           }
        })
     }, 100);
    
      return () => {
            clearInterval(intervalRef.current)
      }
    }, [])
    

    
    
  return (
    <div>
<h3>Timer</h3>
<h4>{timer}</h4>
<button>Play</button>
<button>Pause</button>
<button>Stop</button>
<button>Reset</button>
    </div>
  )
}

export default Timer
