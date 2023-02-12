import { deleteTodo, updateTodo } from "api/crud"
import { todoDto } from "dto"
import { useInput, useToggle } from "hooks"
import { useState } from "react"

export default function TodoItem({todo}: {todo: todoDto}) {
    const toggle = useToggle(false)
    const [check, setCheck] = useState(false)
    const changedTodo = useInput(todo.todo)

    return (
            <li>
                <label>
                <input type="checkbox" checked={check} onChange={(e) => setCheck}/>
                    {
                        ! toggle.state
                        ? <span>{todo.todo}</span>
                        : <span>
                            <input {...changedTodo} data-testid="modify-input"/>
                            <button data-testid="submit-button" onClick={() => {updateTodo(todo.id, changedTodo.value, todo.isCompleted); toggle.swithState()}}>제출</button>
                            <button data-testid="cancel-button" onClick={toggle.swithState}>취소</button>
                        </span>
                    }
                    <button data-testid="modify-button" onClick={toggle.swithState}>수정</button>
                    <button data-testid="delete-button" onClick={() => deleteTodo(todo.id)}>삭제</button>
                </label>
            </li>
            )
}