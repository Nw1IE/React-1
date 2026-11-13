import { State } from "./ClassRoom/50states_intro"
import { useState } from "react";
import { MyContext } from "./MyContext";
import Parent from './Context/Parent'; 
import BigBox from './Context/BigBox';
import { Select } from './ClassRoom/64select_intro';
import { SelectArr } from './ClassRoom/65select_array.jsx';
import { SelectValue } from './ClassRoom/66select_value.jsx';
import { SelectArrValue } from './ClassRoom/67select_array_value.jsx';
import { FormsRadio } from './ClassRoom/68forms_radio.jsx';
import { DefaultValues } from './ClassRoom/69default_values.jsx';
import { ArrayInputsAvg } from './ClassRoom/70array_inputs_binding.jsx';
import { DateObjectInputs } from './ClassRoom/71object_inputs_binding.jsx';
import './style.css';

function App() {
	return (
    <DateObjectInputs>
      fdf
    </DateObjectInputs>	
    );
}

//const [yyyy, mm, dd] = '2025-12-31'.split('-');

//const App = () => {
//    const [numbers, setNumbers] = useState([0, 1, 2, 3])
//
//    return (
//        <div>
//           {numbers.map((numbers) => {
//                return (
//                    <input></input>
//                );
//            })}
//        </div>
//    );
//}


// function App()
//{
//const [textureaValue, setTextareaValue] = useState('');
//
//    const handleChange = (event) => {
//        setTextareaValue(event.target.value);
//    };
//
//    return (
//        <div>
//            <textarea
//            value={textureaValue}
//            onChange={handleChange}
//            />
//        </div>
//    );
//
//}
    

//f unction App() {    
    
    // function show1()
    //{
    //    alert('1');
    //}
    //
    //function show2()
    //{
    //   alert('2');
    //}


    //return (
    //    <div>
    //        <button onClick={show1}>act1</button>
    //        <button onClick={show2}>act2</button>
    //    </div>
    //);

    //function show1(num)
    //{
    //    alert(num);
    //}
    //
    //return (
    //    <div>
    //        <button onClick={() => show1(1)}>show1</button>
    //        <button onClick={() => show1(2)}>show2</button>
    //        <button onClick={() => show1(3)}>show3</button>
    //    </div>
    //);

    //return (
    //    <div>
    //        <button onClick={(event) => console.log(event.target)}>act</button>
    //        <button onClick={(event) => console.log(event)}>act</button>
    //    </div>
    //);

    //function app(a, event, b)
    //{
    //    console.log(a, event, b);
    //}
    //return (
    //   <div>
    //        <button onClick={(event) => app(event, "lada", 13)}>act</button>
    //    </div>
    //);

    //return <State/>;



export default App;
