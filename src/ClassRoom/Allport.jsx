import { useRef, useState } from 'react';


function SupremeHooksRef() 
{
    const [state, setState] = useState(0);
    const ref = useRef(0);
    let local = 0;

    const ClickBack = () => {
        local = local + 1;
        console.log(local);
    }

    const handleClick = () => {
        setState((prev) => prev + 1);
        console.log(state);
    };

    const Click = () => {
        ref.current = ref.current + 1;
        console.log(ref.current);
    }

    return (
        <div>
            <h1>
                212. SupremeHooksRef
            </h1>

            <p>
                <button onClick={handleClick}>State {state}</button>
            </p>

            <p>
                <button onClick={Click}>Button {ref.current}</button>
            </p>

            <p>
                <button onClick={ClickBack}>ClickBack {local}</button>
            </p>
        </div>
    );
}

export default SupremeHooksRef;