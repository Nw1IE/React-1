import { useState } from "react";

export function SelectArr() {
const texts = ['Оренбург', 'Екатеринбург', 'Челябинск', 
		'Ауе']; 
	const [value, setValue] = useState('');
	
	const options = texts.map((text, index) => {
		return <option key={index}>{text}</option>;
	});
	
	return <div>
		<select value={value} onChange={(event) => setValue(event.target.value)}> 
			{options}
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}