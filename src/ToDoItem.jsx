import React from "react";

function ToDoItem({ task, index, onDelete, onMoveUp, onMoveDown }) {
    return (
        <li className="list-group-item border-0 d-flex align-items-center justify-content-between gap-2 bg-light mb-3">
            <span className="fw-bold">{task}</span>
            <div className="d-flex gap-2">
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onDelete(index)}>
                    Удалить
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => onMoveUp(index)}>
                    <i className="bi bi-arrow-up"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => onMoveDown(index)}>
                    <i className="bi bi-arrow-down"></i>
                </button>
            </div>
        </li>
    );
}

export default ToDoItem;