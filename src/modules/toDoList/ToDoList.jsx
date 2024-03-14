import { useState } from "react";
import "./toDoList.css";

export function ToDoList() {
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  function setFocusToTaskInputField() {
    document.querySelector("#inputToDoList").focus();
  }

  function addTask() {
    setFocusToTaskInputField();
    if (taskInput.trim() === "") return;

    setTaskList((currentList) => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(),
          name: taskInput,
          isCompleted: false,
        },
      ];
    });

    setTaskInput("");
  }

  function closeTask(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((task) => task.id !== id);
    });
  }

  function listItemSelect(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isCompleted: !task["isCompleted"],
          };
        }

        return task;
      });
    });
  }

  function keyDownHandler(e) {
    console.log("key enter");
    if (e.key === "Enter" && e.keyCode === 13) {
      addTask();
    }
  }

  return (
    <>
      <div id="myDIV" className="header">
        <input
          className="taskInput"
          type="text"
          name="inputToDoList"
          id="inputToDoList"
          placeholder="Enter to do list"
          value={taskInput}
          onKeyDown={keyDownHandler}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="addBtn" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li
            className={task.isCompleted ? "checked" : ""}
            onClick={() => listItemSelect(task.id)}
            key={task.id}
          >
            {task.name}{" "}
            <span onClick={() => closeTask(task.id)} className="close">
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
