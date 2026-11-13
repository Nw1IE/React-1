import { useState } from "react";

export function FormsRadio() {
    const [value, setValue] = useState('JavaScript');
    
    function changeHandler(event) {
        setValue(event.target.value);
    }
    
    return (
        <div>
            <p>Выберите ваш любимый язык программирования:</p>

            <label>
                <input
                    type="radio"
                    name="lang"
                    value="JavaScript"
                    checked={value === 'JavaScript'}
                    onChange={changeHandler}
                />
                JavaScript
            </label>

            <label>
                <input
                    type="radio"
                    name="lang"
                    value="Python"
                    checked={value === 'Python'}
                    onChange={changeHandler}
                />
                Python
            </label>

            <label>
                <input
                    type="radio"
                    name="lang"
                    value="C#"
                    checked={value === 'C#'}
                    onChange={changeHandler}
                />
                C#
            </label>

            <p>
                Ваш выбор: {value}
                {value === 'JavaScript' && ' — Отличный выбор!'}
                {value === 'Python' && ' — Плохой выбор!'}
            </p>
        </div>
    );
}