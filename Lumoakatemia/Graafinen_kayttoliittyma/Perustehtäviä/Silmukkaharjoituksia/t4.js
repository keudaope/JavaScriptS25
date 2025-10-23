function kertoma()
{
    let luku = parseInt(document.getElementById("luku").value);
    let kertoma = 1;
    for(var i = 1; i <= luku; i++)
    {
        kertoma *= i;
    }
    document.getElementById("vastaus").innerHTML = kertoma;
}