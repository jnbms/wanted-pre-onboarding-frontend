import { useState } from "react"

export default function useInput(initialValue: any = "") {
    const [value, setValue] = useState(initialValue)
    const onChange = ({target: {value}} : React.ChangeEvent<HTMLInputElement>) => setValue(value)
    return {value, onChange}
}