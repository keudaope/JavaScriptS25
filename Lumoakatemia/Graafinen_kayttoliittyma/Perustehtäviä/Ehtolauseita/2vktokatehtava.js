function muunna()
{
    let joulupukki = parseInt(document.getElementById("viikonpaiva").value);
    switch (joulupukki)
    {
        case 1:
            document.getElementById("vastaus").innerHTML = "Maanantai";
            break;
        case 2:
            document.getElementById("vastaus").innerHTML = "Tiistai";
            break;
        case 3:
            document.getElementById("vastaus").innerHTML = "Keskiviikko";
            break;
        case 4:
            document.getElementById("vastaus").innerHTML = "Torstai";
            break;
        case 5:
            document.getElementById("vastaus").innerHTML = "Perjantai";
            break;
        case 6:
            document.getElementById("vastaus").innerHTML = "Lauantai";
            break;
        default:
            document.getElementById("vastaus").innerHTML = "Sunnuntai";
                
    }
    
}