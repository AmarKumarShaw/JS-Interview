import React, { useState, useRef } from "react";

import "../index.css";
const DragDrop = () => {
  const mockData = {
    Todo: ["I want to create React"],
    Inprogress: [
      "I want to create JavaScript",
      "I want to create TataSteel",
      "I want to create JSW",
    ],
    Completed: ["I want to create NodeJS", "I want to create Nest JS"],
  };
  const [tableData, setTableData] = useState(mockData);
  const dragItem = useRef();
  const dragContainer = useRef();

  const handleDragStart = (data, container) => {
    dragItem.current = data;
    dragContainer.current = container;
  };

  const handleDrop = (dropContainer) => {
    setTableData((prev) => {
      const newData = { ...prev };
      const item = dragItem.current;
      const container = dragContainer.current;

      newData[container] = newData[container].filter((d) => d != item);
      newData[dropContainer] = [...newData[dropContainer], item];
      return newData;
    });

    // //clear Refs
    // dragItem.current = null;
    // dragContainer.current = null;
  };

  return (
    <div className="todo-table">
      {Object.keys(tableData).map((container) => {
        return (
          <div
            className="border"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(container)}
          >
            <div className="table-header">{container}</div>

            {tableData[container].map((data, index) => {
              return (
                <div
                  draggable
                  onDragStart={() => handleDragStart(data, container)}
                  className="table-data"
                >
                  {data}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default DragDrop;
