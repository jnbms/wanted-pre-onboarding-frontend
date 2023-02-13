import { wantedApi } from "api"

async function readTodos() {
    const data = await wantedApi.get('/todos').then(res => res.data)
    return data
}
async function createTodo(todo: string) {
    await wantedApi.post('/todos',{todo}).then(res => res.data)
}
async function updateTodo(id: number, todo: string, isCompleted: boolean) {
    await wantedApi.put(`/todos/${id}`,{todo, isCompleted}).then(res => res.data)
}
async function deleteTodo(id: number) { 
    await wantedApi.delete(`/todos/${id}`)
}

export {createTodo, readTodos, updateTodo, deleteTodo}