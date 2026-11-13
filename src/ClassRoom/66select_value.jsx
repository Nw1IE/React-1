import { useState } from "react";

export function SelectValue() {
    const [value, setValue] = useState('');
	
	return <div>
		<select value={value} onChange={event => setValue(event.target.value)}> 
			<option value="1">От 0 до 12 лет</option>
			<option value="2">От 13 до 17 лет</option>
			<option value="3">От 18 до 25 лет</option>
		</select>
		<p>
			{value === '1' && 'вы выбрали от 0 до 12 лет'}
			{value === '2' && 'вы выбрали от 13 до 17 лет'}
			{value === '3' && 'вы выбрали от 18 до 25 лет'}
		</p>
	</div>;
}