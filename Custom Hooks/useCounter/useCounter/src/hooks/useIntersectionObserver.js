import {useEffect,useState,useRef} from "react";

const useIntersectionObserver = ({root=null,rootMargin="0px",threshold=0}) =>{
     const [isIntersecting,setIsIntersecting] = useState(false);
     const ref = useRef();

     useEffect(()=>{
        const node = ref.current;
        const observer = new IntersectionObserver(([entry])=>{
            setIsIntersecting(entry.isIntersecting);
        },{root,rootMargin,threshold})

      observer.observe(node);

      return () =>{
        if(node){
            observer.unobserve(node);
            observer.disconnect();
        }

      }


     },[root,rootMargin,threshold]);
     return {ref,isIntersecting};

}
export default useIntersectionObserver;
