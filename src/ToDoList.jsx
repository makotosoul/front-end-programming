import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function ToDoList() {
  const [columnDefs] = useState([
    { field: "Description", sortable: true, filter: true },
    { field: "Date", sortable: true, filter: true },
    {
      field: "Priority",
      sortable: true,
      filter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ]);
  const [todo, setTodo] = useState({ Description: "", Priority: "", Date: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const addToDo = () => {
    if (todo.Description && todo.Date && todo.Priority) {
      setTodos([...todos, todo]);
      setTodo({ Description: "", Priority: "", Date: "" });
    } else {
      alert("missing data");
      setTodo({ Description: "", Priority: "", Date: "" });
    }
  };
  const deleteToDo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (todo, index) => index != gridRef.current.getSelectedNodes()[0].id,
        ),
      );
    } else {
      alert("Select a row first!");
    }
  };
  return (
    <>
      <input
        placeholder="Description"
        onChange={(e) => setTodo({ ...todo, Description: e.target.value })}
        value={todo.Description}
      />
      <input
        type="date"
        placeholder="Date"
        onChange={(e) => setTodo({ ...todo, Date: e.target.value })}
        value={todo.Date}
      />
      <input
        placeholder="Priority"
        onChange={(e) => setTodo({ ...todo, Priority: e.target.value })}
        value={todo.Priority}
      />
      <button onClick={addToDo}>Add</button>
      <button onClick={deleteToDo}>Delete</button>
      <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
        <AgGridReact
          ref={gridRef}
          onGridReady={(params) => (gridRef.current = params.api)}
          rowData={todos}
          columnDefs={columnDefs}
          rowSelection="single"
        />
      </div>
    </>
  );
}
export default ToDoList;
