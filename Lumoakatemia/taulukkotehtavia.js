/* Tehtävä 1 - Kauppalista */
var kauppalista = [];
function kauppalistat(eines)
{
    kauppalista.push(eines);
    console.log(kauppalista)
}

kauppalistat("maito");
kauppalistat("voi");
kauppalistat("piimä");

/* Tehtävä 2 - 5 nimeä */
var nimet = ["Matti", "Teppo", "Maija", "Tuija", "Sisko"];
console.log(nimet);

/* Tehtävä 3 - taulukon pituus */
function taulukonPituus(taulukko)
{
    console.log("Taulukon pituus on: "+ taulukko.length);
}
taulukonPituus([1, 2, 3, 4, 5])

/* Tehtävä 4 - uusi nimi taulukkoon */
var taulukko = ["Matti", "Anna", "Eeva"];
function uusiNimi(nimi)
{
    taulukko.push(nimi);
    console.log(taulukko);
}
uusiNimi("Esko");

/* Tehtävä 5 - yhdistä taulukot */
function yhdistaTaulukot(tau1, tau2)
{
    tau1.push(...tau2)
    console.log(tau1)
}
yhdistaTaulukot([1, 2, 3], [4, 5, 6])

/* Tehtävä 6 - vain parilliset numerot */
var taulukko = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var parilliset = [];
for (var i = 0; i < taulukko.length; i++)
{
    if(taulukko[i] % 2 == 0)
    {
        parilliset.push(taulukko[i])
    }
}
console.log(parilliset);

/* Tehtävä 7 - taulukon lajittelu */
function lajitteleTaulukko(taulukko)
{
    console.log(taulukko.sort((a, b) => a - b))
}
lajitteleTaulukko([5, 2, 9, 1, 5, 8, 3, 11])

/* Tehtävä 8 - taulukon kääntö */
var kaannettyTaulukko = [];
function kaannaTaulukko(taulukko)
{
    for(var i = taulukko.length -1; i >= 0; i--)
    {
        kaannettyTaulukko.push(taulukko[i]);
        
    }
    console.log(kaannettyTaulukko);
}
kaannaTaulukko([1, 2, 3, 4, 5]);

/* Tehtävä 9 - taulukon muunnos */
function taulukonMuunnos(taulukko)
{
    var teksti = taulukko.join(", ");
    console.log(teksti)
}
taulukonMuunnos(["Matti", "Anna", "Eeva"])

/* Tehtävä 10 - 3. alkion poisto */
function kolmannenPoisto(taulukko)
{
    const poistettava = 3;
    const indeksi = taulukko.indexOf(poistettava);
    if(indeksi !== -1)
    {
        taulukko.splice(indeksi, 1)
    }
    console.log(taulukko)
}
kolmannenPoisto([1, 2, 3, 4, 5]);

/* Tehtävä 11 - tietyn alkion poisto */
function tietynPoisto(taulukko, poistettava)
{
    const indeksi = taulukko.indexOf(poistettava);
    if(indeksi !== -1)
    {
        console.log(`Nimi ${poistettava} löytyy Indeksistä ${indeksi}`);
    }
    else{
        console.log(`Nimeä ${poistettava} ei löytynyt taulukosta ${taulukko}`);
    }
}
tietynPoisto(["Matti", "Anna", "Eeva"], "Ieva")

/* Tehtävä 12 - 2:n viimeisen kopiointi uuteen taulukkoon */
var uusiTaulukko = [];
function kopiointiTaulukkoon(taulukko)
{
    for(i = taulukko.length-2; i < taulukko.length; i++)
    {
        uusiTaulukko.push(taulukko[i])
    }
    console.log(uusiTaulukko);
}
kopiointiTaulukkoon([1, 2, 3, 4, 5]);

/* Tehtävä 13 - muunnetaan taulukon keskimmäinen jäsen 6:ksi */
function keskimmainenJasen(taulukko, luku)
{
    var keskikohta = Math.floor(taulukko.length / 2);
    taulukko[keskikohta] = luku;
    console.log(taulukko)
}
keskimmainenJasen([1, 2, 3, 4, 5], 6)

/* Tehtävä 14 - taulukon arvojen summa*/
function taulukonSumma(taulukko)
{
    var summa = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        summa += taulukko[i];
    }
    console.log(`Taulukon ${taulukko} summa on ${summa}`)
}
taulukonSumma([1, 2, 3, 4, 5])

/* Tehtävä 15 - taulukon keskiarvo */
function taulukonKeskiarvo(taulukko)
{
    var summa = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        summa += taulukko[i];
    }
    console.log(`Taulukon ${taulukko} keskiarvo on ${summa/taulukko.length}`)
}
taulukonKeskiarvo([1, 2, 3, 4, 5])

/* Tehtävä 16 - taulukon monistus */
function monistaTaulukko(taulukko)
{
    var uusiTaulukko = [...taulukko, ...taulukko, ...taulukko]
    console.log(uusiTaulukko);
}
monistaTaulukko([1, 2, 3])

/* Tehtävä 17 - uniikit arvot taulukosta */
function uniikitArvot(taulukko)
{
    var uusiTaulukko = [...new Set(taulukko)];
    console.log(uusiTaulukko);
}
uniikitArvot([1, 2, 2, 3, 4, 4, 5])

/* Tehtävä 18 - ensimmäisen ja viimeisen alkion vaihto */
function taulukonVaihto(taulukko)
{
    var temp = taulukko[0];
    taulukko[0] = taulukko[taulukko.length-1];
    taulukko[taulukko.length-1] = temp;

    console.log(taulukko)
}
taulukonVaihto([1, 2, 3, 4, 5])

/* Tehtävä 19 - merkkijonot ISOIKSI */
function merkkijonotIsoiksi(taulukko)
{
    for(var i = 0; i < taulukko.length; i++)
    {
        taulukko[i] = taulukko[i].toUpperCase();
    }
    console.log(taulukko)
}
merkkijonotIsoiksi(["Matti", "Anna", "Eeva"])

/* Tehtävä20 - poista 4:ää pienemmät taulukosta */
function neljaaPienemmat(taulukko)
{

        const suuretNumerot = taulukko.filter(taulukko => taulukko > 3)


    console.log(suuretNumerot);
}
neljaaPienemmat([1, 2, 3, 4, 5]);
neljaaPienemmat([4, 5, 3, 2, 1]);