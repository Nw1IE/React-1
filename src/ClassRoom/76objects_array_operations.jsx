import { useState } from "react";

const initDeleteNotes = [
    { id: '1', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
    { id: '2', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
    { id: '3', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

export function ObjectsArrayDelete() {
    const [notes, setNotes] = useState(initDeleteNotes);

    function removeNote(id) {
        setNotes(notes.filter(note => note.id !== id));
    }

    const result = notes.map(note => (
        <li key={note.id}>
            <span>{note.prop1}</span>{' '}
            <span>{note.prop2}</span>{' '}
            <span>{note.prop3}</span>{' '}
            <button onClick={() => removeNote(note.id)}>Удалить</button>
        </li>
    ));

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
}

const initEditNotes = [
    { id: '1', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
    { id: '2', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
    { id: '3', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

const emptyForm = { prop1: '', prop2: '', prop3: '' };

export function ObjectsArrayEdit() {
    const [notes, setNotes] = useState(initEditNotes);
    const [form, setForm] = useState(emptyForm);
    const [selectedId, setSelectedId] = useState(null);

    function handleChange(prop, event) {
        setForm({
            ...form,
            [prop]: event.target.value
        });
    }

    function startEdit(note) {
        setSelectedId(note.id);
        setForm({
            prop1: note.prop1,
            prop2: note.prop2,
            prop3: note.prop3
        });
    }

    function saveEdit() {
        if (selectedId === null) return;

        setNotes(notes.map(note => {
            if (note.id === selectedId) {
                return { ...note, ...form };
            }
            return note;
        }));

        setSelectedId(null);
        setForm(emptyForm);
    }

    const result = notes.map(note => (
        <li key={note.id}>
            <span>{note.prop1}</span>{' '}
            <span>{note.prop2}</span>{' '}
            <span>{note.prop3}</span>{' '}
            <button onClick={() => startEdit(note)}>Редактировать</button>
        </li>
    ));

    return (
        <div>
            <div style={{ marginBottom: '15px' }}>
                <input
                    value={form.prop1}
                    onChange={event => handleChange('prop1', event)}
                    placeholder="prop1"
                />{' '}
                <input
                    value={form.prop2}
                    onChange={event => handleChange('prop2', event)}
                    placeholder="prop2"
                />{' '}
                <input
                    value={form.prop3}
                    onChange={event => handleChange('prop3', event)}
                    placeholder="prop3"
                />{' '}
                <button onClick={saveEdit}>Сохранить изменения</button>
            </div>

            <ul>{result}</ul>
        </div>
    );
}