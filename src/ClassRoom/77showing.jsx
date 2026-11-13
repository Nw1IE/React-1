import { useState } from "react";

const initNotes = [
    {
        id: '1',
        name: 'name1',
        desc: 'long description 1',
        show: false,
    },
    {
        id: '2',
        name: 'name2',
        desc: 'long description 2',
        show: false,
    },
    {
        id: '3',
        name: 'name3',
        desc: 'long description 3',
        show: false,
    },
];

// Делаем компонент дефолтным экспортом
export default function ObjectsShowDesc() {
    const [notes, setNotes] = useState(initNotes);

    function toggleShow(id) {
        setNotes(notes.map(note => {
            if (note.id === id) {
                return { ...note, show: !note.show };
            }
            return note;
        }));
    }

    const result = notes.map(note => {
        return (
            <p key={note.id}>
                {note.name}{' '}
                {note.show && <i>{note.desc}</i>}{' '}
                
                <button onClick={() => toggleShow(note.id)}>
                    {note.show ? 'Скрыть' : 'Показать'} описание
                </button>
            </p>
        );
    });

    return (
        <div>
            <h3>Показ/скрытие описания по кнопке</h3>
            {result}
        </div>
    );
}