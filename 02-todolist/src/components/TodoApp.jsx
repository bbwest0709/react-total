import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoCount from "./TodoCount";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";

function TodoApp() {
    return (
        <TodoProvider>
            <div className="todoApp">
                <h2>Todo List</h2>
                <TodoForm />
                <TodoList />
                <TodoCount />
            </div>
        </TodoProvider>
    )
}

export default TodoApp;