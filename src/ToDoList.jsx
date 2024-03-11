import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
  const [value] = useState(null);
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
  const dateChange = (date) => {
    setTodo({ ...todo, Date: date });
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack
          mt={2}
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            placeholder="Description"
            onChange={(e) => setTodo({ ...todo, Description: e.target.value })}
            value={todo.Description}
          />
          <DatePicker
            value={value}
            onChange={date => dateChange(date.toISOString().substring(0,10))}
          />
          <TextField
            placeholder="Priority"
            onChange={(e) => setTodo({ ...todo, Priority: e.target.value })}
            value={todo.Priority}
          />
          <Button variant="outlined" onClick={addToDo}>
            Add
          </Button>
          <Button variant="outlined" color="error" onClick={deleteToDo}>
            Delete
          </Button>
        </Stack>
        <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
          <AgGridReact
            ref={gridRef}
            onGridReady={(params) => (gridRef.current = params.api)}
            rowData={todos}
            columnDefs={columnDefs}
            rowSelection="single"
          />
        </div>
      </LocalizationProvider>
    </>
  );
}
export default ToDoList;
