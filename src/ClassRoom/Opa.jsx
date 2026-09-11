export function Opa()
{
    const isAuth = false;

    return (
        <div>
            {!isAuth && <p>пожалуйста, авторизируйтесь!</p>}
        </div>
    )
}