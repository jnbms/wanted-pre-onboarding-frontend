import { todoDto } from "dto"
import { createContext, useState } from "react"

const TodosContext = createContext({})

const TodosStore = ({children}: React.PropsWithChildren)  => {
    const [todos, setTodos] = useState<todoDto[]>([])
    return <TodosContext.Provider value={{todos, setTodos}}>
            {children}
    </TodosContext.Provider>
}

export {TodosContext, TodosStore}