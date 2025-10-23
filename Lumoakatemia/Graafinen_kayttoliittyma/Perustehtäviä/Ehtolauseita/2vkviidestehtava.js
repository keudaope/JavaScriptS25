function teeKertotaulu()
{
    let luku = parseInt(document.getElementById("luku").value);
    lause = "";
    for(var i = 1; i <= 10; i++)
    {
        lause+= luku + " x " + i + " = " + luku * i + "<br>";
    }

    document.getElementById("vastaus").innerHTML = lause;
}