import {useState,useEffect,useRef} from "react"
const ImageCarousel = () =>{
    const [index,setIndex] = useState(0)
    const ref = useRef("")
    const DATA_LENGTH = data.length
    const handlePrev = (prev) =>{
        if(prev === DATA_LENGTH -1){
            return 0;
        }
        setIndex((prev)=> prev +1)
    }

    const handleNext =  () =>{
        setIndex((prev)=>{
            if(prev ===0){
               setIndex(DATA_LENGTH -1 )
            }
            else{
                setIndex(index-1)
            }

        })
        
    }
    useEffect(()=>{

    },[])

    return(
        <div>
        <button onClick={handlePrev}>
        Prev
        </button>
        <button onClick={handleNext}>
            Next
        </button>
        </div>
    )
}

export default ImageCarousel;