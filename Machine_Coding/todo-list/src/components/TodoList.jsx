import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAdd = () => {
    setList((prev) => {
      const newData = [...prev, input];
      setInput("");
      return newData;
    });
  };

  const handleDelete = (data) => {
    setList((prev) => {
      const newData = [...prev];
      const filteredData = newData.filter((p) => p !== data);
      return filteredData;
    });
  };

  const handleEdit = (e, item, index) => {
    setEditText(item);
    setEditIndex(index);
  };
  const handleSave = (index) => {
    setList((prev) => {
      const list = [...prev];
      list[index] = editText;
      setEditText("");
      setEditIndex(null);
      return list;
    });
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditText("");
  };
  return (
    <div>
      <h2>Todo List</h2>

      <div>
        <div>
          <input type="text" value={input} onChange={(e) => handleChange(e)} />
          <button onClick={handleAdd}>Add</button>
        </div>
        {list.map((data, index) => {
          return (
            <div>
              {editIndex == index ? (
                <div>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)}>Save</button>
                  <button onClick={() => handleCancel(index)}>Cancel</button>
                </div>
              ) : (
                <div>
                  {data}
                  <button onClick={(e) => handleEdit(e, data, index)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(data)}>Delete</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
