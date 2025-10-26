import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk a dog"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() { }

    function deleteTask(id) { }

    function moveTaskUp(id) { }

    function moveTaskDown(id) { }

    return (
        <div>
            <h1>ToDo Список</h1>

            <div>
                <input type="text"
                    placeholder='Введите задачу ...'
                    value={newTask}
                    onChange={handleInputChange} />
                <button 
                    onClick={addTask}>
                    Добавить
                </button>
            </div>

            <ol>
                {
                    tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                onClick={() => deleteTask(index)}>
                                Удалить
                            </button>
                            <button
                                onClick={() => moveTaskUp(index)}>
                                Вверх
                            </button>
                            <button
                                onClick={() => moveTaskDown(index)}>
                                Вниз
                            </button>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default ToDoList