import { useState } from "react";

const initDate = {
    year: 2025,
    month: 12,
    day: 31,
};

function getDayOfWeek(year, month, day) {
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    
    const date = new Date(year, month - 1, day);
    return days[date.getDay()];
}

export function DateObjectInputs() {
    const [date, setDate] = useState(initDate);

    function handleChange(prop, event) {
        setDate({
            ...date,
            [prop]: event.target.value
        });
    }

    return (
        <div>
            <input
                value={date.year}
                onChange={event => handleChange('year', event)}
            />
            <input
                value={date.month}
                onChange={event => handleChange('month', event)}
            />
            <input
                value={date.day}
                onChange={event => handleChange('day', event)}
            />

            <p>
                Дата: {date.year}-{date.month}-{date.day} ({getDayOfWeek(date.year, date.month, date.day)})
            </p>
        </div>
    );
}