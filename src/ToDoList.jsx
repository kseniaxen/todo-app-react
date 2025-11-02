import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Позавтракать", "Принять душ", "Прогулка с собакой"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
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
                        <li key={index} className="list-group-item border-0 d-flex align-items-center gap-2 bg-light mb-3">
                            <span className="fw-bold">{task}</span>
                            <div className="d-flex gap-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => deleteTask(index)}>
                                    Удалить
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => moveTaskUp(index)}>
                                    <i class="bi bi-arrow-up"></i>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => moveTaskDown(index)}>
                                    <i class="bi bi-arrow-down"></i>
                                </button>
                            </div>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default ToDoList