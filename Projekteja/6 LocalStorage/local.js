

function tallenna()
{
    avain = document.getElementById("avain").value;
enimi = document.getElementById("enimi").value;
snimi = document.getElementById("snimi").value;
losoite = document.getElementById("losoite").value;
pnro = document.getElementById("pnro").value;
ptpaikka = document.getElementById("ptpaikka").value;
puhelin = document.getElementById("puhelin").value;
sposti = document.getElementById("sposti").value;

const tiedot = {
    etunimi: enimi,
    sukunimi: snimi,
    lähiosoite: losoite,
    postinumero: pnro,
    postitoimipaikka: ptpaikka,
    puhelin: puhelin,
    sähköposti: sposti
}
    localStorage.setItem(avain, JSON.stringify(tiedot));
}

function listaa()
{
    for(var i = 0; i < localStorage.length; i++)
    {
        const avain = localStorage.key(i);
        const arvo = localStorage.getItem(avain);
        document.getElementById("vastaus").innerHTML += "<b>"+avain + "</b>: &emsp;" + arvo
        + "&emsp;<button type='button' id=" + avain + " onclick='poista(this)'>Poista tieto</button>"+ "<br/>";
    
    }
}
