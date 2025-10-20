function tarkista()
{
    ktunnus = document.getElementById("ktunnus").value;
    salasana = document.getElementById("salasana").value;

    if(ktunnus == "jyri.lindroos@keuda.fi" && salasana == "salis")
    {
        alert("Tietosi on oikein");
    }
    else
    {
        alert("Tietosi on väärin");
    }
}