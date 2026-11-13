import { useState } from "react";

export function ReactiveArrayAdd() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const [value, setValue] = useState('');

    function addNote() {
        if (value.trim() === '') return; // защита от добавления пустой строки

        setNotes([...notes, value]);
        setValue(''); // очищаем инпут после добавления
    }

    const result = notes.map((note, index) => {
        return <li key={index}>{note}</li>;
    });

    return (
        <div>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                placeholder="Введите новый элемент"
            />
            <button onClick={addNote}>Добавить</button>

            <ul>
                {result}
            </ul>
        </div>
    );
}