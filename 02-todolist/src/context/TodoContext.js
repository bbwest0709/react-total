import { createContext, useState, useEffect } from "react";

// localStorage에 'toDos' 데이터를 저장할 때 사용할 키 값
const TODOS_KEY = "toDos";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    // 앱이 처음 렌더링될 때, localStorage에 저장된 toDos 데이터를 가져와 상태에 할당
    useEffect(() => {
        const saved = localStorage.getItem(TODOS_KEY);
        if(saved) {
            setTodos(JSON.parse(saved));
        }
    }, [])

    // todos 값이 변경되면 localStorage에 저장
    useEffect(() => {
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    }, [todos])
    
    // 새로운 할일 추가
    const addTodo = (text) => {
        // 기존의 데이터 뒤에 새로 입력한 데이터를 추가
        const newTodo = {
            id: Date.now(), // 현재 시간을 기준으로 고유한 ID 생성
            text,
            check:false
        }
        setTodos((prev) => [...prev, newTodo]);
    }

    // 개별 삭제
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // 완료되면 줄긋기
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, check:!todo.check} : todo)
        )
    }

    // 전체 삭제
    const removeAll = () => {
        setTodos([]);
        localStorage.removeItem(TODOS_KEY);
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, deleteTodo, toggleTodo, removeAll}}>
            {children}
        </TodoContext.Provider>
    )
}