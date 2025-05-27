import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCount = () => {
    const {todos} = useContext(TodoContext);
    const total = todos.length;

    // filter() 메서드 동작 원리 -> 배열을 순회하면서 조건에 맞는 값을 새로운 배열로 반환하는 메서드
    // const newArray = array.filter((element) => condition);
    // condition의 값이 true로 평가되면 그 요소가 새 배열에 포함되고, false로 평가되면 포함되지 않음
    // map() 과의 차이점 -> map은 각 항목을 변형하여 새로운 배열을 반환, filter는 조건을 만족하는 항목들만 반환
    const completed = todos.filter((c) => c.check).length;

    return (
        <div>
            <p>완료 : {completed} / 전체 : {total}</p>
        </div>
    )
}

export default TodoCount;