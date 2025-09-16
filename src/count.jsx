import { useState } from "react"

export default function Count(){
    const [count, setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const counterStyle = {
        border: '2px solid yellow'
    }
    return (
        <div>
            <h2>count: {count}</h2>
            <button onClick={handleAdd}>Click</button>
        </div>
    )
}