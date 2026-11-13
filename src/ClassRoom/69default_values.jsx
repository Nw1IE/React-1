import { useState } from "react";

export function DefaultValues() {
const [text, setText] = useState('Начальный текст');
    const [isChecked, setIsChecked] = useState(true);

    return (
        <div>
            <div>
                <input defaultValue={text} />
                <p>Стейт инпута: {text}</p>
            </div>

            <div>
                <label>
                    <input type="checkbox" defaultChecked={isChecked} />
                    Согласен с условиями
                </label>
                <p>Стейт чекбокса: {isChecked ? 'true' : 'false'}</p>
            </div>
        </div>
    );
}