import { useState } from "react";

export function State()
{
    const [inBan, setUnBan] = useState(false);
	let Ban = <button onClick={() => setUnBan(false)}>разбанить</button>;
    

    let UnBan = <button onClick={() => setUnBan(true)}>забанить</button>;
    

	return (
        <div>
		<span>{inBan ? 'Ban' : 'UnBan'}</span> 
        <br/>
        {inBan ? Ban : UnBan}

	</div>   
    );
}