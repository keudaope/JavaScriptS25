function kvuosi()
{
    let vuosiluku = document.getElementById("vuosi").value;
    if(vuosiluku % 4 == 0 && vuosiluku % 100 != 0)
    {
        document.getElementById("vastaus").innerHTML = "Vuosi on karkausvuosi";
    }
    else if (vuosiluku % 400 == 0)
    {
        document.getElementById("vastaus").innerHTML = "Vuosi on karkausvuosi";
    }
    else{
        document.getElementById("vastaus").innerHTML = "Vuosi ei ole karkausvuosi";
    }
}