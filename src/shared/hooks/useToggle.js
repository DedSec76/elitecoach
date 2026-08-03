import { useState } from "react"

export const useToggle = (initialValue = false) => {
    const [toggle, setToggle] = useState(initialValue);

    const open = () => setToggle(true)
    const close = () => setToggle(false)
    const onToggle = () => setToggle(prev => !prev)

    return { toggle, open, close, onToggle }
}
