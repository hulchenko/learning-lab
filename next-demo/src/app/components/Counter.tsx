"use client";

import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)} style={{border: "1px solid white", padding: "5px", width: "5rem"}}> + </button>
            <button onClick={() => setCount(prevCount =>  prevCount - 1)} style={{border: "1px solid white", padding: "5px", width: "5rem"}}> - </button>
        </>
    )
}