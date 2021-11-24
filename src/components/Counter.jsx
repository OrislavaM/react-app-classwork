import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>increment</button>
            <button>decrement</button>
            <button>reset</button>
        </>
    );
};

export default Counter;
