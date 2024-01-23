import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoBoard = ({ todoList, removeTask, updataTask }) => {
  return (
    // <div className="todo-list flex flex-col justify-center items-center flex-1">
    //   {todoList?.length > 0 ? (
    //     todoList?.map((item) => <TodoItem item={item} />)
    //   ) : (
    //     <h3>There is no Item to show</h3>
    //   )}
    // </div>
    <div className="todo-list flex flex-col justify-center items-center gap-2">
      {todoList?.length > 0 ? (
        todoList.map((item) => (
          <TodoItem
            item={item}
            removeTask={removeTask}
            updataTask={updataTask}
            key={item._id}
          />
        ))
      ) : (
        <h3>There is no Item to show</h3>
      )}
    </div>
  );
};
