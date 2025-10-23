function parilliset()
{
    let luku = document.getElementById("nro").value;
    let teksti = "";
    for(var i = 2; i <= luku; i+=2)
    {
        teksti += i + " ";
    }
    document.getElementById("vastaus").innerHTML = teksti;
}