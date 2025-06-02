import { useState } from "react"
import "../index.css"

const Accordion = ()=>{
    const initialData= [
        {title:"React",
            description:"This is a complete React JS Developer Course"
        },
        {title:"Node JS",
            description:"This is a complete Node JS Developer Course"
        },
        {title:"TypeScript",
            description:"This is a complete TypeScript Developer Course"
        },
    ]

    const [showDescription,setShowDescription]= useState(false);
    // Main Logic 
    const [descriptionIndex,setDescriptionIndex] =useState("")
    const handleDescription = (index)=>{
     setDescriptionIndex(prev => prev === index ? null :index)
    }
    return(
        <div>
            {initialData.map((data,index)=>{
                return(
                    <div key={index}>
                        <button style={{marginBottom:"50px"}} onClick={()=>handleDescription(index)}>{data.title}</button>
                        {descriptionIndex === index && <p style={{color:"white"}} className="description">{data.description}</p>}
                    </div>
                )
            })}
              
        </div>
    )
}

export default Accordion