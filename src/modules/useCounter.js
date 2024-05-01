import { useState, useEffect } from "react"

export const useCounter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("Count:", count)
    }, [count])

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    return {decrease, increase, count }
}