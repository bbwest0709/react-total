// 모든 전역 변수를 담는 객체
// configureStore toolkt에서 제공해주는 store를 생성
import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from "../reducers/CounterReducer";
import TodoSlice from "../reducers/TodoSlice"

const store = configureStore({
    // reducer:CounterReducer
    reducer: {
        counter: CounterReducer,
        todos: TodoSlice
    }
})

export default store;