export function Obo()
{
    const age = 19;

    return (
        <div>
            {age >18 ? <p>Обаюдно</p> : <p>неОбоюдно</p>}
        </div>
    );
}