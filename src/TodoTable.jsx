import React from "react";

function TodoTable(props) {
  return (
    <>
      <table>
        <tbody>
          {props.todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => props.deleteToDo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoTable;
