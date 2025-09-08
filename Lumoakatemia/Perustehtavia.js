/* Tehtävä 1 */
console.log("Hei maailma!");

/* Tehtävä 2 */
var l1, l2;
l1 = 3;
l2 = 4;
console.log(l1+l2);

/* Tehtävä 3 */
/* Jatketaan tehtävästä 2 */
console.log(l1-l2);

/* Tehtävä 4 */
/* Jatketaan tehtävästä 2 */
console.log(l1*l2);

/* Tehtävä 5 */
/* Jatketaan tehtävästä 2 */
console.log(l1/l2);

/* Tehtävä 6 Celsius --> Fahrenheit */
var cel = 100;
var fah = cel * 1.8 + 32;
console.log(`${cel} Celsiusastetta on ${fah} Fahrenheit astetta`);

/* Tehtävä 7 Fahrenheit --> Celsius */
fah = 212;
cel = (fah - 32)/1.8;
console.log(`${fah} Fahrenheitastetta on ${cel} Celsiusastetta`);

/* Tehtävä 8 mailit --> kilometrit */
var mailit = 1.609;
var kilometrit = mailit * 1.609;
console.log(`${mailit} mailia on ${kilometrit} kilometriä`);

/* Tehtävä 9 kilometrit --> mailit */
kilometrit = 1.609;
mailit = kilometrit / 1.609;
console.log(`${kilometrit} kilometriä on ${mailit} mailia`);

/* Tehtävä 10 tuumat --> sentit */
var tuumat = 1;
var sentit = 2.54 * tuumat;
console.log(`${tuumat} tuumaa on ${sentit} senttiä`);

/* Tehtävä 11 sentit --> tuumat */
sentit = 5.08;
tuumat = sentit / 2.54;
console.log(`${sentit} senttiä on ${tuumat} tuumaa`);

/* Tehtävä 12 yardit --> metrit */
yardit = 1
metrit = yardit * 0.9144
console.log(`${yardit} yardia on ${metrit} metriä`);

/* Tehtävä 13 metrit --> yardit */
metrit = 1;
yardit = metrit / 0.9144
console.log(`${metrit} metriä on ${yardit} Yardia`);

/* Tehtävät 2-5 uudestaan siten, että käyttäjä voi antaa molemmat arvot */
function summafunktio(a, b)
{
    console.log("Lukujen " +a + " ja " +b + " summa on " + (a+b));
}
function erotusfunktio(a, b)
{
    console.log("Lukujen " + a + " ja " + b + " erotus on " + (a-b));
}
function tulofunktio(a, b)
{
    console.log("Lukujen " +a + " ja " +b + " tulo on " + a*b);
}
function osamaarafunktio(a, b)
{
    console.log("Lukujen " +a + " ja " +b + " osamaara on " + a/b);
}
summafunktio(6, 3);
erotusfunktio(6,3);
tulofunktio(6,3);
osamaarafunktio(6,3);

/* Tehtävä 15 - ympyrän ala */
function ympyranAla(sade)
{
    console.log(`Ympyrän ala on ${Math.PI * sade * sade}, kun säde on ${sade}`)
}

ympyranAla(5);

/* Tehtävä 16 - neliön ala */
function nelionAla(sivu)
{
    console.log(`Neliön ala on ${sivu * sivu}, kun sivu on ${sivu}`)
}

nelionAla(5);

/* Tehtävä 17 - suorakulmion ala */
function suorakulmionAla(pituus, leveys)
{
    console.log(`Suorakulmion ala on ${pituus*leveys}, kun pituus on ${pituus} ja leveys on ${leveys}.`);
}
suorakulmionAla(5,4);

/* Tehtävä 18 - vuosiksi, kuukausiksi, päiviksi */
function muunnaVuosiksi(paivat) {
    let vuodet = parseInt(paivat / 365.25);
    let kuukaudet = parseInt((paivat % 365.25) / (365.25 / 12));
    let pvt = parseInt((paivat % 365.25) - kuukaudet * (365.25 / 12));
    console.log(paivat + " päivää on " + vuodet + " vuotta " + kuukaudet + " kuukautta ja " + pvt + " päivää.")
}
muunnaVuosiksi(22500)