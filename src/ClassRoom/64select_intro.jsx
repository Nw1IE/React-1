import { useState } from "react";

export function Select() {
const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return ( <div>
		<select value={value} onChange={handleChange}>
			<option>Оренбург</option>
			<option>Екатеринбург</option>
			<option>Челябинск</option>
			<option>Ауе</option>
		</select>
		<p>
			ваш пользовтеля(МОЙЙ): {value}
		</p>
	</div>
    );
}