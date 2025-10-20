function kaanna()
{
    let kieli = document.getElementById("kieli").value;
    let vastaus = document.getElementById("t5v");
    if(kieli == "Englanti")
    {
        vastaus.innerHTML = "Hello World";
    }
    else if(kieli == "Ruotsi")
    {
        vastaus.innerHTML = "Hej Världen";
    }
    else if(kieli == "Espanja")
    {
        vastaus.innerHTML = "Hola Mundo";
    }
    else{
        vastaus.innerHTML = "Kieltä ei ole valittu"
    }

}