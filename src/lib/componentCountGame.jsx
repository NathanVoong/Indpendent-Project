import {useState} from "react";

export function CountGame() {

    let [count, setCount] = useState(0)
    let [increment, setIncrement] = useState(1)
    return (
        <div>
            <h3>Count is {count}</h3>
            <h4>Count is increasing in {increment}'s</h4>
            <button onClick={() => setCount(count + increment)}>
                Increase count
            </button>
            <button onClick={() => setCount(count = 0)}>
                Reset count to 0
            </button>
            <p>
                <button onClick={() => setIncrement(increment + 1)}>
                    Increase increment
                </button>
                <button onClick={() => setIncrement(increment = 1)}>
                    Reset increment to 1
                </button>
            </p>
        </div>
    )

}