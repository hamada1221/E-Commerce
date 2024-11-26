import { createContext, useState } from "react";

export let Counter = createContext(0)

export default function CounterContextProvider({ children }) {
    let [myCounter, setCounter] = useState(0)

    function increase() {
        setCounter(myCounter + 1)
    }

    return <Counter.Provider value={{ myCounter, increase }}>
        {children}
    </Counter.Provider>
}

