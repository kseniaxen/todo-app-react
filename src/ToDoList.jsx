import React, { useEffect, useState } from 'react';
import ToDoItem from "./ToDoItem";

const STORAGE_KEY = "tasks";

function ToDoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    const items = tasks.map((t, i) => ({ task: t, index: i }));
    const activeItems = items.filter(x => !x.task.completed);
    const doneItems = items.filter(x => x.task.completed);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [
                ...t,
                {
                    text: newTask.trim(),
                    completed: false,
                    createdAt: new Date().toLocaleString()
                }
            ]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        setTasks((t) => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if (index > 0) {
            setTasks((t) => {
                const copy = [...t];
                [copy[index], copy[index - 1]] = [copy[index - 1], copy[index]];
                return copy;
            });
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            setTasks((t) => {
                const copy = [...t];
                [copy[index], copy[index + 1]] = [copy[index + 1], copy[index]];
                return copy;
            });
        }
    }

    function toggleComplete(index) {
        setTasks((t) => {
            const copy = [...t];
            copy[index] = { ...copy[index], completed: !copy[index].completed };
            return copy;
        });
    }

    function clearAllTasks() {
        if (window.confirm("Удалить все задачи?")) {
            setTasks([]);
            localStorage.removeItem(STORAGE_KEY);
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

            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <h5 className="mb-3">Активные задачи
                            <span className="badge bg-secondary ms-2">{activeItems.length}</span>
                        </h5>
                        <ol className="list-group list-group-numbered">
                            {activeItems.length === 0 && (
                                <li className="list-group-item text-muted">Нет активных задач</li>
                            )}
                            {activeItems.map(({ task, index }) => (
                                <ToDoItem
                                    key={index}
                                    task={task}
                                    index={index}
                                    onDelete={deleteTask}
                                    onMoveUp={moveTaskUp}
                                    onMoveDown={moveTaskDown}
                                    onToggle={toggleComplete}
                                />
                            ))}
                        </ol>
                    </div>

                    <div className="col-12 col-md-6">
                        <h5 className="mb-3">Выполненные
                            <span className="badge bg-success ms-2">{doneItems.length}</span>
                        </h5>
                        <ol className="list-group list-group-numbered">
                            {doneItems.length === 0 && (
                                <li className="list-group-item text-muted">Пока пусто</li>
                            )}
                            {doneItems.map(({ task, index }) => (
                                <ToDoItem
                                    key={index}
                                    task={task}
                                    index={index}
                                    onDelete={deleteTask}
                                    onMoveUp={moveTaskUp}
                                    onMoveDown={moveTaskDown}
                                    onToggle={toggleComplete}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            <div className="my-2">
                <button
                    className="btn btn-outline-danger"
                    onClick={clearAllTasks}
                    type="button"
                >
                    Очистить все задачи
                </button>
            </div>
        </div>
    )
}

export default ToDoList;