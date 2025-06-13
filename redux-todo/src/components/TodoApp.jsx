import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from "../reducers/TodoSlice";

const TodoApp = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        const trimmed = text.trim();
        if (!trimmed) return;
        dispatch(addTodo(text));
        setText("");
    }

    return (
        <div className='todo-app-container'>
            <h2>TodoList</h2>
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">추가</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            className={`todo-item ${todo.completed ? "completed" : ""}`}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;