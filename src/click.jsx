import { useState } from "react"

export default function Click(){
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    const handleDicrase = () => {
        if (count > 0 ) {

            setCount(prevCount => prevCount -1)
        }
    }
    const handleReset = () => {
        setCount(0)
    }

    const stylebtn = {
        margin: '20px',
    }

    return (
        <div className="click">
            <button onClick={handleClick}>Click And Increase</button>
            <h1>Count: {count}</h1>
            <button onClick={handleDicrase} style={stylebtn}>Don't Click</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
};

