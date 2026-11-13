import { useState } from "react";

export function ArraySquare() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

    function squareNote(index) {
        setNotes(notes.map((note, idx) => (idx === index ? note ** 2 : note)));
    }

    const result = notes.map((note, index) => (
        <li key={index} onClick={() => squareNote(index)}>
            {note}
        </li>
    ));

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
}

export function ArrayDelete() {
    const [notes, setNotes] = useState(['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4']);

    function removeNote(index) {
        setNotes(notes.filter((_, idx) => idx !== index));
    }

    const result = notes.map((note, index) => (
        <li key={index}>
            {note}{' '}
            <button onClick={() => removeNote(index)}>Удалить</button>
        </li>
    ));

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
}

export function ArrayEditBlur() {
    const [notes, setNotes] = useState(['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4']);
    const [value, setValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    // №3: при клике на li записываем её текст в инпут и запоминаем индекс
    function startEdit(index) {
        setEditIndex(index);
        setValue(notes[index]);
    }

    // №4: при потере фокуса обновляем элемент массива по сохранённому индексу
    function finishEdit() {
        if (editIndex === null) return;

        setNotes(notes.map((note, idx) => (idx === editIndex ? value : note)));
        setEditIndex(null);
        setValue('');
    }

    const result = notes.map((note, index) => (
        <li key={index} onClick={() => startEdit(index)}>
            {note}
        </li>
    ));

    return (
        <div>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
                onBlur={finishEdit}
                placeholder="Кликни на пункт списка..."
            />
            <ul>{result}</ul>
        </div>
    );
}

export function ArrayReverse() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

    function reverseNotes() {
        setNotes([...notes].reverse());
    }

    const result = notes.map((note, index) => (
        <li key={index}>{note}</li>
    ));

    return (
        <div>
            <button onClick={reverseNotes}>Перевернуть список</button>
            <ul>{result}</ul>
        </div>
    );
}