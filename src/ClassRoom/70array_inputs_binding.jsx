import { useState } from "react";

function getAvg(arr) {
    if (arr.length === 0) return 0;

    let sum = 0;
    for (const elem of arr) {
        sum += +elem;
    }

    return sum / arr.length;
}

export function ArrayInputsAvg() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    function changeHandler(index, event) {
        setNotes([
            ...notes.slice(0, index),
            event.target.value,
            ...notes.slice(index + 1)
        ]);
    }

    const inputs = notes.map((note, index) => (
        <input
            key={index}
            value={note}
            onChange={event => changeHandler(index, event)}
        />
    ));

    return (
        <div>
            {inputs}
            <p>Среднее арифметическое: {getAvg(notes)}</p>
        </div>
    );
}