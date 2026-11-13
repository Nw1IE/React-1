import React, { useContext } from 'react';
import { MyContext } from '../MyContext'; // Поднимаемся на уровень выше из папки Context в src
import Grandson from './Grandson';

function Daughter() {
    const age = useContext(MyContext); // Получаем возраст из контекста

    return (
        <div>
            <h3>Daughter Component</h3>
            <p>Мне передали возраст: {age}</p>
            <Grandson />
        </div>
    );
}

export default Daughter;