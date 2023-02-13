import { readTodos } from "api/crud"
import { TodosContext } from "context/todos"
import { useContext, useEffect } from "react"

export default function useTodos() {
    const {todos, setTodos}: any = useContext(TodosContext)
    useEffect(() => {readTodos().then(data => JSON.stringify(data) !== JSON.stringify(todos) ? setTodos(data) : {})} ,[todos])
    const changeTodos = () =>  readTodos().then(data => setTodos(data))
    return [todos, changeTodos]
}