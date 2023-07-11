import { useState } from "react";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1" },
    { id: 2, name: "Todo2" },
    { id: 3, name: "Todo2" },
    { id: 4, name: "Todo2" },
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: crypto.randomUUID() + 1, name: newItem }]);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} action="" className="form-control">
        <label htmlFor="todo" className="label-primary">
          Todos
        </label>
        <input
          value={todos.name}
          id="todo"
          type="text"
          className="input-control"
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button className="btn btn-primary">Add Todo</button>
      </form>
      <div>
        <ul>
          {todos.map(({ id, name }) => (
            <li key={id}>
              <input type="checkbox" name="list" />
              {name}
              <button
                className="btn btn-danger"
                onClick={() => {
                  setTodos(todos.filter((e) => e.id !== id));
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
