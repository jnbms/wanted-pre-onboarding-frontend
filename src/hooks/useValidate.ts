import { useEffect, useState } from "react"

export default function useValidate(validate: any) {
const [enabled, setEnabled] = useState(false)
    useEffect(() => validate ? setEnabled(true) : setEnabled(false))
    return enabled
}