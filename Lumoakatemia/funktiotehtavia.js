/* Tehtävä 1 - Summafunktio */
function laskeSumma(a, b)
{
    return a+b
}

console.log(summa(3,5))

/* Tehtävä 2 - Neliön pinta-ala */
function laskeNelionPintaAla(sivu)
{
    return sivu * sivu
}

console.log(laskeNelionPintaAla(4))

/* Tehtävä 3 - Ympyrän pinta-ala */
function laskeYmpyranPintaAla(sade)
{
    return Math.PI * sade * sade;
}
console.log(laskeYmpyranPintaAla(5))

/* Tehtävä 4 - Keskiarvo */
function laskeKeskiArvo(taulukko)
{
    summa = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        summa += taulukko[i]
    }
    return summa / taulukko.length
}

console.log(laskeKeskiArvo([1, 2, 3, 4, 5]))

/* Tehtävä 5 - onko luku parillinen */
function onkoParillinen(luku)
{
    if(luku % 2 == 0)
    {
        return "Luku on parillinen";
    }
    else
    {
        return "Luku on pariton";
    }
}

console.log(onkoParillinen(2));
console.log(onkoParillinen(7));

/* Tehtävä 6 - merkkijonon pituus */
function laskeMerkkijononPituus(merkkijono)
{
    return merkkijono.length;
}

console.log(laskeMerkkijononPituus("Innostunutsonni"))
console.log(laskeMerkkijononPituus("Saippuakauppias"))

/* Tehtävä 7 - tyhjä merkkijono */
function onkoMerkkijonoTyhja(merkkijono)
{
    if(merkkijono.length == 0)
    {
        return "Merkkijono on tyhjä"
    }
    else{
        return "Merkkijono ei ole tyhjä"
    }
}
console.log(onkoMerkkijonoTyhja(""));
console.log(onkoMerkkijonoTyhja("ei"));

/* Tehtävä 8 - taulukon suurin arvo */
function laskeSuurin(taulukko)
{
    suurin = taulukko[0];
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] > suurin)
        {
            suurin = taulukko[i]
        }
    }
    return suurin
}

console.log(laskeSuurin([2, 7, 1, 9, 3]))