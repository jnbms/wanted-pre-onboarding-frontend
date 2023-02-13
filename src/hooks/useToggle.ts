import { useCallback, useState } from "react"

export default function useToggle(initialState: boolean) {
    const [state, setState] = useState(initialState)
    const swithState = useCallback(() => setState(state => !state), [])
    return {state, swithState}
}