import React from "react";

function ToDoItem({ task, index, onDelete, onMoveUp, onMoveDown, onToggle }) {
    return (
        <li
            className={`list-group-item d-flex justify-content-between align-items-start bg-light gap-2 mb-2 border-0 ${task.completed ? "opacity-75" : ""
                }`}
        >
            
            <div
                className="d-flex flex-column flex-grow-1 text-start"
                style={{ minWidth: 0 }}
            >
                <div className="d-flex align-items-start gap-2 mb-2">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(index)}
                        className="form-check-input mt-1"
                    />
                    <div
                        className={`fw-bold text-break ${task.completed
                                ? "text-decoration-line-through text-secondary"
                                : ""
                            }`}
                    >
                        {task.text}
                    </div>
                </div>
                <small className="text-muted">
                    Добавлено: {task.createdAt || "—"}
                </small>
            </div>

            <div className="d-flex gap-2 flex-shrink-0">
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