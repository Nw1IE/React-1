import { useState } from "react";

const [notes, setNotes] = useState(['a', 'b', 'c']);

setNotes([...notes, 'd']);

setNotes(['z', ...notes]);

const index = 1;
setNotes([
    ...notes.slice(0, index),
    'new',
    ...notes.slice(index)
]);


const [notes2, setNotes2] = useState(['a', 'b', 'c']);

const index2 = 1;
setNotes2([
    ...notes2.slice(0, index2),
    'updated',
    ...notes2.slice(index2 + 1)
]);

setNotes2(notes2.map((note, idx) => idx === index2 ? 'updated' : note));


const [notes3, setNotes3] = useState(['a', 'b', 'c']);

const index3 = 1;
setNotes3(notes3.filter((note, idx) => idx !== index3));

setNotes3(notes3.filter(note => note !== 'b'));

setNotes3([
    ...notes3.slice(0, index3),
    ...notes3.slice(index3 + 1)
]);


const [notes4, setNotes4] = useState([
    { id: 1, name: 'note1' },
    { id: 2, name: 'note2' },
]);

const newNote = { id: 3, name: 'note3' };

setNotes4([...notes4, newNote]);

setNotes4([newNote, ...notes4]);


const [notes5, setNotes5] = useState([
    { id: 1, name: 'note1', active: false },
    { id: 2, name: 'note2', active: false },
]);

const targetId5 = 2;

setNotes5(notes5.map(note => {
    if (note.id === targetId5) {
        return { ...note, name: 'updatedNote', active: true };
    }
    return note;
}));


const [notes6, setNotes6] = useState([
    { id: 1, name: 'note1' },
    { id: 2, name: 'note2' },
    { id: 3, name: 'note3' },
]);

const targetId6 = 2;

setNotes6(notes6.filter(note => note.id !== targetId6));