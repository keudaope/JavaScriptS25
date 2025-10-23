function salasanaksi()
{
    let sana = document.getElementById("sana").value;
    let salasana = "<p>";
    for(var i = 0; i < sana.length; i++)
    {
        salasana += sana[i] + "Ö";
    }
    salasana += "</p>";
    document.getElementById("vastaus").innerHTML = salasana;
}

