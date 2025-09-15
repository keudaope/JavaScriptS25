/* Tehtävä 1 - kahdesta suurempi */
function kahdestaSuurempi(luku1, luku2)
{
    if(luku1 > luku2)
    {
        console.log("Luku1 on suurempi");
    }
    else if (luku1 == luku2)
    {
        console.log("Luvut ovat yhtäsuuret")
    }
    else{
        console.log("Luku2 on suurempi");
    }
}
kahdestaSuurempi(3,2);
/* Tehtävä 2 - kolmesta suurin */
function kolmestaSuurin(luku1, luku2, luku3){
    if(luku1 > luku2 && luku1 > luku3)
    {
        console.log("Luku1 on suurin");
    }
    else if(luku2 > luku3)
    {
        console.log("Luku2 on suurin")
    }
    else if(luku1 == luku2 && luku1 == luku3)
    {
        console.log("Luvut ovat yhtäsuuret")
    }
    else{
        console.log("Luku3 on suurin")
    }
}
kolmestaSuurin(7, 5, 3)
kolmestaSuurin(5, 7, 3)
kolmestaSuurin(3, 5, 7)

/* Tehtävä 3 - 5 tai 11 jaollinen */
function jaollinen(luku)
{
    if(luku % 5 == 0 && luku % 11 == 0)
    {
        console.log("Luku on jaollinen sekä viidellä, että 11:sta");
    }
    else if(luku % 11 == 0)
    {
        console.log("Luku on jaollinen 11:sta");
    }
    else if(luku % 5 == 0)
    {
        console.log("Luku on jaollinen 5:llä");
    }
    else{
        console.log("Luku ei ole jaollinen 5:llä eikä 11:sta")
    }
}
jaollinen(66);
jaollinen(25);
jaollinen(55);
jaollinen(19);

/* Tehtävä 4 - karkausvuosi */
function karkausvuosi(vuosi)
{
    if(vuosi % 400 == 0)
    {
        console.log("Vuosi on karkausvuosi")
    }
    else if(vuosi % 100 == 0)
    {
        console.log("Vuosi ei ole karkausvuosi")
    }
    else if(vuosi % 4 == 0)
    {
        console.log("Vuosi on karkausvuosi")
    }
    else{
        console.log("Vuosi ei ole karkausvuosi")
    }
}
karkausvuosi(2024);
karkausvuosi(2000);
karkausvuosi(1900);
karkausvuosi(1997);

/* Tehtävä 5 - parillinen vaiko pariton */

function parillinenPariton(luku)
{
    if(luku % 2 == 0)
    {
        console.log("Luku on parillinen");
    }
    else{
        console.log("Luku on pariton")
    }
}
parillinenPariton(0);
parillinenPariton(3);
parillinenPariton(16);

/* Tehtävä 11 - Voitto / tappio */
function voittoTappio(myynnit, ostot)
{
    if(myynnit - ostot > 0)
    {
        console.log(`Teit voittoa ${myynnit - ostot} €`)
    }
    else if (myynnit - ostot < 0)
    {
        console.log(`Teit tappiota ${myynnit - ostot} €`)
    }
    else
    {
        console.log(`Et tehnyt tappiota tai voittoa`)
    }
}
voittoTappio(500, 300);
voittoTappio(300, 500);
voittoTappio(300, 300);

/* Tehtävä 13 viikonpäivät */

function viikonpaiva(nro)
{
    if(nro == 1)
    {
        console.log("maanantai");
    }
    else if(nro == 2)
    {
        console.log("tiistai");
    }
    else if(nro == 3)
    {
        console.log("keskiviikko");
    }
    else if(nro == 4)
    {
        console.log("torstai");
    }
    else if(nro == 5)
    {
        console.log("perjantai");
    }
    else if(nro == 6)
    {
        console.log("lauantai");
    }
    else if(nro == 7)
    {
        console.log("sunnuntai");
    }
    else
    {
        console.log("Et antanut numeroa välillä 1-7")
    }
}
viikonpaiva(4);
viikonpaiva(7);
viikonpaiva(0);

/* Tehtävä 14, ovatko luvut samat */
function samat(nro1, nro2)
{
    if(nro1 == nro2)
    {
        console.log("Luvut ovat samat")
    }
    else{
        console.log("Luvut eivät ole samat")
    }
}

samat(3, 3);
samat(2, 3);

/* Tehtävä 15 - voiko äänestää? */
function aanestys(ika)
{
    if(ika >= 18)
    {
        console.log("Voit äänestää");
    }
    else{
        console.log("Et voi äänestää")
    }
}

aanestys(67);
aanestys(17);

/* Tehtävä 16 - Kuukauden nro */
function kuukaudenPaivat(kk)
{
    if(kk == 1 || kk == 3 || kk == 5 || kk == 7 || kk == 8 || kk == 10 || kk == 12)
    {
        console.log("Kuukaudessa on 31 päivää")
    }
    else if(kk == 4 || kk == 6 || kk == 9 || kk == 11)
    {
        console.log("Kuukaudessa on 30 päivää")
    }
    else if(kk == 2)
    {
        console.log("Kuukaudessa on 28/29 päivää")
    }
    else{
        console.log("Et antanut oikeaa kk numeroa (1-12)")
    }
}
kuukaudenPaivat(4);
kuukaudenPaivat(8);
kuukaudenPaivat(2);

/* Tehtävä 17 - rahan muunto seteleiksi ja kolikoiksi */
function muunna(rahasumma)
{
    var vsataa, ksataa, sata, vkymmenta, kkymmenta, kymmenen, viisi;
    var keuroa, euro, vsenttia, ksenttia, kysenttia, viisisenttia;
    vsataa = Math.floor(rahasumma / 500);
    rahasumma = rahasumma % 500;
    ksataa = Math.floor(rahasumma / 200);
    rahasumma = rahasumma % 200;
    sata = Math.floor(rahasumma / 100);
    rahasumma = rahasumma % 100;
    vkymmenta = Math.floor(rahasumma / 50);
    rahasumma = rahasumma % 50;
    kkymmenta = Math.floor(rahasumma / 20);
    rahasumma = rahasumma % 20;
    kymmenen = Math.floor(rahasumma / 10);
    rahasumma = rahasumma % 10;
    viisi = Math.floor(rahasumma / 5);
    rahasumma = rahasumma % 5;
    keuroa = Math.floor(rahasumma / 2);
    rahasumma = rahasumma % 2;
    euro = Math.floor(rahasumma / 1);
    rahasumma = rahasumma % 1;
    vsenttia = Math.floor(rahasumma / .50);
    rahasumma = rahasumma % .50;
    ksenttia = Math.floor(rahasumma / .20);
    rahasumma = rahasumma % .20;
    kysenttia = Math.floor(rahasumma / .10);
    rahasumma = rahasumma % .10;
    viisisenttia = Math.ceil(rahasumma / .05);
    console.log(`Antamasi summa vastaa \n${vsataa} * 500 €\n${ksataa} * 200 €\n${sata} * 100 €\n${vkymmenta} * 50 €\n${kkymmenta} * 20 €\n${kymmenen} * 10 €\n${viisi} * 5 €\n${keuroa} * 2 €\n${euro} * 1 €\n${vsenttia} * 0.50 €\n${ksenttia} * 0.20 €\n${kysenttia} * 0.10 €\n${viisisenttia} * 0.05 €`);
}
muunna(1378.85);

function onkoKolmio(deg1, deg2, deg3)
{
    if(deg1 + deg2 + deg3 == 180)
    {
        console.log("Kolmio on mahdollista piirtää")
    }
    else{
        console.log("Kolmiota ei ole mahdollista piirtää")
    }
}
onkoKolmio(100, 42, 38);
onkoKolmio(101, 42, 38)