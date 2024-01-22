import React from "react";

export const TodoItem = ({ item, removeTask, updataTask }) => {
  return (
    <div className="todo-list flex-1">
      <ul className="flex flex-col gap-2">
        <li
          className={`flex items-center gap-2 ${
            item.isComplete ? "disabled" : ""
          }`}
        >
          <p className="flex-1">{item.task}</p>

          <div className="button-group">
            <button className="btn-delete" onClick={() => removeTask(item._id)}>
              삭제
            </button>
            <button
              className="btn-secondary"
              onClick={() => updataTask(item._id)}
            >
              {!item.isComplete ? "미완료" : "완료"}
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
