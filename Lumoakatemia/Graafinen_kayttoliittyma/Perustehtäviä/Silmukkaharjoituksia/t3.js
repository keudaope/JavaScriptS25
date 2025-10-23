function etsi()
{
    let sana = document.getElementById("etsittava").value;
    let vastaus="";
    for(let i = 0; i < sana.length; i++)
    {
        if(sana[i] == "ö" || sana[i] == "Ö")
        {
            vastaus = "on";
            i = sana.length-1;
        }
        else
        {
            vastaus = "ei";
        }
    }
    document.getElementById("vastaus").innerHTML = vastaus;
}