function App() {    
    
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

    function app(a, event, b)
    {
        console.log(a, event, b);
    }
    return (
        <div>
            <button onClick={(event) => app(event, "lada", 13)}>act</button>
        </div>
    );
}
export default App;
