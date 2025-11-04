import React from "react";

function ToDoItem({ task, index, onDelete, onMoveUp, onMoveDown, onToggle }) {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-center bg-light gap-2 mb-2 border-0 ${task.completed ? "opacity-75" : ""
                }`}
        >
            <div className="d-flex align-items-center gap-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(index)}
                    className="form-check-input"
                />
                <span
                    className={`fw-bold ${task.completed ? "text-decoration-line-through text-secondary" : ""
                        }`}
                >
                    {task.text}
                </span>
            </div>

            <div className="d-flex gap-2">
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(index)}
                >
                    Удалить
                </button>

                {!task.completed && (
                    <>
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => onMoveUp(index)}
                        >
                            <i className="bi bi-arrow-up"></i>
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => onMoveDown(index)}
                        >
                            <i className="bi bi-arrow-down"></i>
                        </button>
                    </>
                )}
            </div>
        </li>
    );
}

export default ToDoItem;