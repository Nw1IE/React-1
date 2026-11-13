import React, { useContext } from 'react';
import { MyContext } from '../MyContext';

function Grandson() {
    const age = useContext(MyContext);

    return (
        <div>
            <h4>Grandson Component</h4>
            <p>Возраст пополам: {age / 2}</p> {/* 42 / 2 = 21 */}
        </div>
    );
}

export default Grandson;