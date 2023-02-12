import { Fragment, useEffect, useState } from "react"
import { wantedApi } from "api"
import { TodoItem } from "components"
import { useInput } from "hooks"
import { createTodo, readTodos } from "api/crud"


export default function Todo() {
    const access_token = localStorage.getItem('JWT')
    wantedApi.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
    
    const newTodo = useInput()
    const [todos, setTodos] = useState([])
    useEffect(() => { readTodos().then(data => setTodos(data)) })
    
    return(
        <Fragment>
            <input data-testid="new-todo-input" {...newTodo}/>
            <button data-testid="new-todo-add-button" onClick={() => {createTodo(newTodo.value)}}>추가</button>
            {todos.map((todo: any) => <TodoItem key={todo.id} todo={todo}/>)}
        </Fragment>
    )
}