import {useEffect, useState} from "react";


const useFetch = (url) =>{
const [data,setData] = useState(null);
const [loading,setLoading] = useState(true);
const [error,setError] = useState(null);


useEffect(()=>{
    const dataFetch = async()=>{
        try{
            const res = await fetch(url);
            const response = await res.json()
                setData(response);
                setLoading(false);
            
        }catch(err){
            setError(err);
            setLoading(false);
        }
    }
    dataFetch();
},[url])

return {
    data,
    loading,
    error
}

}

export default useFetch;