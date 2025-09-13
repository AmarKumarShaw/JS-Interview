import {useState} from "react"
import useLocalStorage from "../hooks/useLocalStorage"
const localStorage = () => {
const [key,setKey] = useState(null);
const {setItem,getItem,deleteItem} = useLocalStorage(key);
    return (
        <div>
        <h2>useLocalStorage</h2>
        <input 
        type="text" 
        value={key}
        onChange= {e => setKey(e.target.value)}
        />
        <button onClick={() => setItem()}>Set</button>
        <button onClick={()=> getItem()}>Get</button>
        <button onClick={()=> deleteItem()}>Delete</button>
        </div>

    )
};
export default localStorage;
