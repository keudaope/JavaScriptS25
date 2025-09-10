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