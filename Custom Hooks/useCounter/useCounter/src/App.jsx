import useCounter from "./hooks/useCounter";
import './App.css'
import {useWindowSize} from './hooks/useWindowSize'
import useFetch from "./hooks/useFetch";

import {useDebounce} from './hooks/useDebounce';
import { useEffect, useState } from "react";
import LocalStorage from "./components/localStorage";
import IntersectionObserver from "./components/IntersectionObserver";

const App = () =>{
  // Testing useCounter Hook 
//   const {increment,decrement,reset,count} = useCounter(0);
// return (
//  <div>
//   <h1>Count: {count}</h1>
//   <button onClick={increment}>Increment</button>
//   <button onClick={decrement}>Decrement</button>
//   <button onClick={reset}>Reset</button>
//  </div>
// )

// Testing useWindowSize Hook
  // const {width,height}=useWindowSize();
  // return (
  //   <div>
  //     <h3>Height: {height}px </h3>
  //     <h3>Width: {width} px</h3>
  //   </div>
  // )

  // Testing useFetch Hook 
  // const url = "https://jsonplaceholder.typicode.com/posts";
  // const {data,loading,error} = useFetch(url);
  // if(loading) return <h1>Loading...</h1>
  // if(error) return <h1>Error: {error.message}</h1>;
  // return (
  //   <div>
  //     <h1>Posts</h1>  
  //     {data && data.map(post=>(
  //       <div key={post.id} className="post">
  //         <h3>{post.title}</h3>
  //         <p>{post.body}</p>
  //       </div>
  //     ))}
  //   </div>
  // )
  // 


//   Testting useDebounce Hook 
//   const [search,setSearch] = useState("");
//   const debouncedSearch = useDebounce(search,500);

//   useEffect(()=>{
//     console.log("API Calling....",debouncedSearch)
//   },[debouncedSearch])

// return(
//   <div>
//     <h1>Debounce Hook</h1>
//     <input
//     type="text"
//     placeholder="Search..."
//     value={search}
//     onChange={(e) => setSearch(e.target.value)}
//     />
//   </div>
// )

return(
  <>
  {/* //useLocalStorage Hook */}
  {/* <LocalStorage/> */} 
  <IntersectionObserver/>
  </>
)




}
export default App;

