import { useEffect, useState } from "react";
import { TodoBoard } from "./components/TodoBoard";
import api from "./utils/api";
import "./App.scss";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoValue, setTodoValue] = useState();

  const getTasks = async () => {
    const response = await api.get("/tasks");

    // console.log("response.data", response?.data);
    setTodoList(response.data.data);
  };

  const addTask = async () => {
    try {
      const response = await api.post("/tasks", {
        task: todoValue,
        isComplete: false,
      });
      if (response.status === 200) {
        console.log("SUCCESS");
        setTodoValue("");
        getTasks();
      } else {
        throw new Error("Task can not be added");
      }
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const updataTask = async (id) => {
    try {
      const task = todoList.find((item) => item._id === id);
      const response = await api.put(`/tasks/${id}`, {
        isComplete: !task.isComplete,
      });
      if (response.status === 200) {
        getTasks();
      }
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  const removeTask = async (id) => {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        console.log("DELETE");
        getTasks();
      } else {
        throw new Error("Task can not be deleted");
      }
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // console.log("todoList", todoList);

  return (
    <div className="App">
      <div className="container md mx-auto flex flex-col gap-10 p-10">
        <div className="flex justify-center">
          <div className="input-item flex flex-1 gap-4">
            <input
              type="text"
              placeholder="할 일을 입력하세요."
              className="flex-1"
              value={todoValue || ""}
              onChange={(e) => setTodoValue(e.target.value)}
            />
            <div className="button-group">
              <button className="btn-primary" onClick={addTask}>
                추가
              </button>
            </div>
          </div>
        </div>

        <TodoBoard
          todoList={todoList}
          removeTask={removeTask}
          updataTask={updataTask}
        />
      </div>
    </div>
  );
}

export default App;
