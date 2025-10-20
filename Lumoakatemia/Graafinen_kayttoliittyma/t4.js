function saaAjaa()
{
    let ika = document.getElementById("ika").value;
    let vastaus = document.getElementById("t4v");
    if(ika < 15)
    {
        vastaus.innerHTML = "Saat ajaa polkupyörää"
    }
    else if(ika < 18)
    {
        vastaus.innerHTML = "Saat ajaa mopoa"
    }
    else{
        vastaus.innerHTML = "Saat ajaa autoa"
    }
}