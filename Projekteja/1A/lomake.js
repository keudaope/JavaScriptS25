function tarkasta()
{
    // Nimen tarkastus
    let nimi = document.getElementById("nimi").value;
    if(nimi.length < 5)
    {
        alert("Anna vähintään 5-merkkinen nimi");
        document.getElementById("nimi").focus();
    }

    // Salasanan tarkastus
    let salasana = document.getElementById("salasana").value;
    if(salasana.length < 8)
    {
        alert("Anna vähintään 8-merkkinen salasana")
    }

    // Radiobuttoneiden tarkastus
    let himo = document.getElementById("himo").checked;
    let opiskelu = document.getElementById("opiskelu").checked;
    let enKayta = document.getElementById("en kayta").checked;
    if (himo == false && opiskelu == false && enKayta == false) {
        alert("Valitse, millainen koneenkäyttäjä olet!");
    }

    // Checkboxien tarkastus
    let hienot = document.getElementById("hienot").checked;
    let ammatti = document.getElementById("ammattimaiset").checked;
    let ostan = document.getElementById("ostan").checked;
    if(hienot == false && ammatti == false && ostan == false)
    {
        alert("Valitse, mitä pidät sivuistani");
    }

    // Pudotusvalikon tarkastus
    let pudotus = document.getElementById("lempi").value;
    if(pudotus == "")
    {
        alert("Valitse lempiaineesi");
    }

    // Textarean tarkastus
    let alue = document.getElementById("kehitys").value;
    if(alue.length < 15)
    {
        alert("Kirjoita vähintään 15-merkkiä laatikkoon");
    }

    alert("Kiitos tiedoista, nyt kaikki on oikein!");
}