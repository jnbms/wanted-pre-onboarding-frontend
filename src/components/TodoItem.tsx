import { useInput, useToggle, useTodos } from "hooks"
import { todoDto } from "dto"
import { deleteTodo, updateTodo } from "api/crud"

// Assignment 5 : 투두 리스트 목록 표현, li 태그로 감싸기
// Assignment 6 : 새로운 TODO를 입력할 수 있는 input과 추가 button
// Assignment 7 : TODO의 체크박스를 통해 완료 여부를 수정
// Assignment 8 : TODO 우측에 수정버튼과 삭제 버튼
// Assignment 9 : 투두 리스트의 삭제 기능 구현
// Assignment 10 : 투두 리스트의 수정 기능을 구현
export default function TodoItem({todo}: {todo: todoDto}) {
    const toggle = useToggle(false)
    const check = useToggle(todo.isCompleted)
    const changedTodo = useInput(todo.todo)
    const [todos, changeTodos] = useTodos()

    return (
            <li>
                <input type="checkbox" checked={check.state} onChange={check.swithState}/>
                {
                    ! toggle.state
                    ? <span>{todo.todo}</span>
                    : <span>
                        <input data-testid="modify-input" {...changedTodo}/>
                        <button data-testid="submit-button" onClick={() => {changeTodos(updateTodo(todo.id, changedTodo.value, check.state)); toggle.swithState()}}>제출</button>
                        <button data-testid="cancel-button" onClick={toggle.swithState}>취소</button>
                    </span>
                }
                <button data-testid="modify-button" onClick={toggle.swithState}>수정</button>
                <button data-testid="delete-button" onClick={() => {changeTodos(deleteTodo(todo.id))}}>삭제</button>
            </li>
            )
}