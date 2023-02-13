import { Fragment } from "react"
import { wantedApi } from "api";
import { TodoItem } from "components"
import { useInput, useTodos } from "hooks"
import { createTodo } from "api/crud"


export default function Todo() {
    const access_token = localStorage.getItem('JWT')
    wantedApi.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
    
    const newTodo = useInput()
    const [todos, changeTodos] = useTodos()
    
    return(
        <Fragment>
            <input data-testid="new-todo-input" {...newTodo}/>
            <button data-testid="new-todo-add-button" onClick={() => changeTodos(createTodo(newTodo.value))}>추가</button>
            {todos.map((todo: any) => <TodoItem key={todo.id} todo={todo}/>)}
        </Fragment>
    );
}