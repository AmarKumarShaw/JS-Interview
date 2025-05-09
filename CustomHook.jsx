import {useState,useEffect} from "react"
import {debounce} from "./debounce"

const getDeviceType = (width) =>{
    if(width < 768) return "mobile"
    if(width < 1024) return "tablet"
    return "desktop"
}

const useViewPort = () =>{
    const [device,setDevice]  = useState(()=>
        getDeviceType(window.innerWidth)
    )

    useEffect(()=>{
        const handleResize = debounce(()=>{
            const currentDevice = getDeviceType(window.innerWidth)
            setDevice(currentDevice)
        },2000)
        window.addEventListener("resize",handleResize)

        return () => window.removeEventListener("resize",handleResize)
    },[])
    return device;
    


}

export default useViewPort;