import { useState, useEffect  } from "react";
import Clock from "./Clock";

function UseTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
            
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function App() {
    const time = UseTime();
    return (
        <>
            <h1>Relógio</h1>
            <Clock time={time.toLocaleTimeString()} />
        </>
    );
}