import { useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState({ desc: "", date: "" });
  const [todos, setTodos] = useState([]);

  const addToDo = () => {
    if (todo.desc && todo.date) {
      setTodos([...todos, todo]);
      setTodo({ desc: "", date: "" });
    } else {
      alert("missing data");
      setTodo({ desc: "", date: "" });
    }
    console.log(todos);
  };
  const deleteToDo = (index) => {
    const filterdTodo = todos.filter((i) => i !== todos[index]);
    setTodos(filterdTodo);
  };
  return (
    <>
      <input
        placeholder="Description"
        onChange={(e) => setTodo({ ...todo, desc: e.target.value })}
        value={todo.desc}
      />
      <input
        type="date"
        placeholder="Date"
        onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        value={todo.date}
      />
      <button onClick={addToDo}>Add</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => deleteToDo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default ToDoList;
