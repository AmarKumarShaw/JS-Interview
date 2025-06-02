import React, { useEffect, useRef, useState } from "react";
import "./ProgressBar.css"
const ProgressBar = () => {
  const intervalRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(intervalRef.current);
          return prev;
        }
      })
    },
    1000);
    return () => clearInterval(intervalRef.current);
  }, [progress]);
  return (
    <div>
         <div className="progress-bar" >
            <div style={{ width: `${progress}%` }} className="progress-line"> {progress}%</div>
       
      </div>
     
    </div>
  );
};

export default ProgressBar;
