import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";


const IntersectionObserver =()=>{
const {ref,isIntersecting} = useIntersectionObserver({
threshold:1
})

return(
    <div style={{height:"200vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div
        ref={ref}
        style={{
            height:"200px",
            width:"200px",
            backgroundColor:isIntersecting ? "green":"red",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:"#fff",
            fontSize:"1.5rem",
            transition:"background-color 0.3s ease"
        }}
        >
            {isIntersecting ? "In View":"Out of View"}

        </div>
    </div>
)

}
export default IntersectionObserver;