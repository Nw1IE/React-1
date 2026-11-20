import { useEffect, useRef, useState } from 'react'

function Timer () {
    const [ increment, setIncrement ] = useState(0);
    const isMount = useRef(true);
    const timeoutId = useRef(null);

    useEffect(() => {
        if (isMount.current) {
            timeoutId.current = setInterval(() => {
                setIncrement((prev) => prev + 1);
            }, 1000);

            isMount.current = false;
        }
    }, []);

    const handleStop = () => {
        clearInterval(timeoutId.current);
    };

    return (
        <div>
            <p>
                {increment}
            </p>

            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default Timer;