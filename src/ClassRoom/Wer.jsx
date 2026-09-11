export function Wer()
{
    const isAuth = true;

    return (
        <div>
            {isAuth && <p>Вы авторизованы</p>}
        </div>
    );
}