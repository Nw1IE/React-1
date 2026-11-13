import { useContext } from 'react';
import { MyContext } from '../MyContext.js';

function SmallBox() {
    const name = useContext(MyContext);
	return (
		<div>
			<p>I am {name} </p>
		</div>
	);
}

export default SmallBox;