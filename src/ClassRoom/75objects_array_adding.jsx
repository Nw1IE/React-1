import { useState } from "react";

const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
    },
];

const emptyForm = {
    prop1: '',
    prop2: '',
    prop3: '',
};

export function ObjectsArrayAddBtn() {
    const [notes, setNotes] = useState(initNotes);

    function addNote() {
        const newNote = {
            id: crypto.randomUUID(),
            prop1: 'newVal1',
            prop2: 'newVal2',
            prop3: 'newVal3',
        };

        setNotes([...notes, newNote]);
    }

    const result = notes.map(note => (
        <li key={note.id}>
            <span>{note.prop1}</span>{' '}
            <span>{note.prop2}</span>{' '}
            <span>{note.prop3}</span>
        </li>
    ));

    return (
        <div>
            <button onClick={addNote}>Добавить элемент</button>
            <ul>{result}</ul>
        </div>
    );
}

export function ObjectsArrayAddInputs() {
    const [notes, setNotes] = useState(initNotes);
    const [form, setForm] = useState(emptyForm);

    function handleChange(prop, event) {
        setForm({
            ...form,
            [prop]: event.target.value,
        });
    }

    function addNote() {
        if (!form.prop1.trim() && !form.prop2.trim() && !form.prop3.trim()) return;

        const newNote = {
            id: crypto.randomUUID(),
            ...form,
        };

        setNotes([...notes, newNote]);
        setForm(emptyForm);
    }

    const result = notes.map(note => (
        <li key={note.id}>
            <span>{note.prop1}</span>{' '}
            <span>{note.prop2}</span>{' '}
            <span>{note.prop3}</span>
        </li>
    ));

    return (
        <div>
            <input
                value={form.prop1}
                onChange={event => handleChange('prop1', event)}
                placeholder="prop1"
            />
            <input
                value={form.prop2}
                onChange={event => handleChange('prop2', event)}
                placeholder="prop2"
            />
            <input
                value={form.prop3}
                onChange={event => handleChange('prop3', event)}
                placeholder="prop3"
            />
            <button onClick={addNote}>Добавить из инпутов</button>

            <ul>{result}</ul>
        </div>
    );
}