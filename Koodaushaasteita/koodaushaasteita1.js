// Tehtävä 1

function pieninSuurin(taulu)
{
    taulu.sort((a, b)=> a-b);
    console.log("Pienin: " + taulu[0]);
    console.log("Suurin: " + taulu[taulu.length-1])
}

pieninSuurin([8, 4, 9, 6, 2]);

// Tehtävä 2
function rillinenRiton(luku)
{
    if(luku % 2 == 0)
        console.log("Luku on parillinen");
    else
        console.log("Luku on pariton")
}

rillinenRiton(3)

// Tehtävä 3
function kuukausi(kk)
{
    switch(kk)
    {
        case 1:
            console.log("Tammikuu");
            break;
        case 2:
            console.log("Helmikuu");
            break;
        case 3:
            console.log("Maaliskuu");
            break;
        case 4:
            console.log("Huhtikuu");
            break;
        case 5:
            console.log("Toukokuu");
            break;
        case 6:
            console.log("Kesäkuu");
            break;
        case 7:
            console.log("Heinäkuu");
            break;
        case 8:
            console.log("Elokuu");
            break;
        case 9:
            console.log("Syyskuu");
            break;
        case 10:
            console.log("Lokakuu");
            break;
        case 11:
            console.log("Marraskuu");
            break;
        case 12:
            console.log("Joulukuu");
            break;
        default:
            console.log("Anna luku väliltä 1-12")
    }
}
kuukausi(8)

// Tehtävä 4 - tehdään oliolla
class Osoiterekisteri
{
    constructor(enimi, snimi, losoite, pnro, ptoimipaikka, puhelin, email)
    {
        this.etunimi = enimi;
        this.sukunimi = snimi;
        this.lahiosoite = losoite;
        this.postinumero = pnro;
        this.postitoimipaikka = ptoimipaikka;
        this.puhelin = puhelin;
        this.sahkoposti = email;
    }
    tulostaTiedot()
    {
        console.log("Nimi: " + this.etunimi + " " + this.sukunimi);
        console.log("Osoite: " + this.lahiosoite + ", " + this.postinumero + ", " + this.postitoimipaikka);
        console.log("Puhelin: " + this.puhelin);
        console.log("Sähköposti: " + this.sahkoposti);
    }
}

var jyri = new Osoiterekisteri("Jyri", "Lindroos", "Sarviniitynkatu 9", "04200", "Kerava", "0401744562", "jyri.lindroos@keuda.fi");
jyri.tulostaTiedot();

// Tehtävä 5
function aakkosissa(sana)
{
    var taulu = Array.from(sana);
    taulu.sort();
    var uusitaulu = taulu.join(", ")
    console.log(uusitaulu)
}

aakkosissa("Järjestelmällinen");

// Tehtävä 6
function arvosana(nimi, arvosana)
{
    if(arvosana < 50)
    {
        console.log(nimi +" Hylätty");
    }
    else if(arvosana < 60)
    {
        console.log(nimi + " T1");
    }
    else if(arvosana < 70)
    {
        console.log(nimi + " T2");
    }
    else if(arvosana < 80)
    {
        console.log(nimi + " H3");
    }
    else if(arvosana < 90)
    {
        console.log(nimi + " H4");
    }
    else{
        console.log(nimi + "K5");
    }
}

arvosana("Daniel", 80);