import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const [tasks, setTasks] = useState([
        { text: "Позавтракать", completed: false },
        { text: "Принять душ", completed: false },
        { text: "Прогулка с собакой", completed: false }
    ]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, { text: newTask, completed: false }]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function toggleComplete(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    }

    return (
        <div className="text-center">
            <h1>ToDo Список</h1>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={newTask}
                                onChange={handleInputChange}
                                placeholder="Введите задачу ..."
                            />
                            <button
                                className="btn btn-success"
                                onClick={addTask}
                                type="button"
                            >
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ol className="list-group list-group-numbered align-items-center">
                {
                    tasks.map((task, index) =>
                        <ToDoItem
                            key={index}
                            task={task}
                            index={index}
                            onDelete={deleteTask}
                            onMoveUp={moveTaskUp}
                            onMoveDown={moveTaskDown}
                            onToggle={toggleComplete}
                        />
                    )}
            </ol>
        </div>
    )
}

export default ToDoList;