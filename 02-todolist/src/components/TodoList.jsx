import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
    const { todos, removeAll } = useContext(TodoContext);

    return (
        <div className="todoList">
            <button onClick={removeAll}>전체 삭제</button>
            <ul>
                {todos.length === 0 ? (
                    <li>할 일이 없습니다!</li>
                ) : (
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))
                )}
            </ul>
        </div>
    )

}
export default TodoList;