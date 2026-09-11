export function Aba()
{
    const isAdmin = true;
    let a;

    if (isAdmin) 
    {
        a = <p>text1</p>;
    }
    else
    {
        a = <p>text2</p>;
    }

    return a;
}