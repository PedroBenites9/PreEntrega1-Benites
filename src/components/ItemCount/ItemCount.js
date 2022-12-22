import { useState } from "react";

const ItemCount = () => {
    const [count, setcount] = useState(0);
    const decrement = () => {
        setcount(prev => prev - 1);
    }
    const increment = () => {
        for (let i = 0; i < 5; i++) {
            setcount(prev => {
                console.log(prev);
                console.log(count)
                return prev + 1
            });

        }
    }
    const reset = () => {
        setcount(0);
    }

    return (
        <div>
            <h1>Contador</h1>
            <h3>{count}</h3>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default ItemCount
