import { useState } from "react";
import Button from "../Button";
import styles from "./Counter.module.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className={styles.red}>{counter}</div>
            <Button color="green" onClick={() => setCounter(counter + 1)}>
                Increment
            </Button>
            <Button color="blue" onClick={() => setCounter(counter - 1)}>
                Decrement
            </Button>
            <Button color="red" onClick={() => setCounter(0)}>
                Reset
            </Button>
        </>
    );
};
export default Counter;
