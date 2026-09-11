import React from 'react';
import '../App.css'; 

export function RunningCode() {
    const num1 = 3;
    const num2 = 2;
    const name = "Phonk";
    const surname = "Music";
    const num = 4;
    
    return (
    <div>
        <b>Number one</b>
        <br />
        result: {num1 ** num2}
        
        <br />
        <br />
        
        <b>Number two</b>
        <br />
        result: <span className="rainbow-text">{name + ' ' + surname}</span>
        
        <br />
        <br />
        
        <b>Number three</b>
        <br />
        result: {Math.sqrt(num)}
    </div>
    );
}