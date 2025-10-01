/* Tehtävä 1 - Lainan maksu */
var paaoma = 5000;
var kaudet = 2;
var korko = 0.02;
for(var i = 0; i < kaudet; i++)
{
    paaoma += paaoma * korko;
}
console.log(paaoma)

/* Tehtävä 2 - Kertoma */
function kertoma(luku)
{
    var kertoma = 1;
    for(var i = 1; i <= luku; i++)
    {
        kertoma *= i;
    }
    console.log(`Luvun ${luku} kertoma on ${kertoma}`)
}
kertoma(5)

/* Tehtävä 3 - nro 3 ensimmäinen esiintymä */
function esiintyma()
{
    taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];

for (var i = 0; i < taulukko.length; i++)
{
    if(taulukko[i] == 3)
    {
        console.log(`Numero 3 on taulukon ${i}.s jäsen`);
        i = taulukko.length-1;
    }
}
}
    

/* Tehtävä 4 - sanan kääntö */
function kaanto(sana)
{
    var uusisana = "";
    for(var i = sana.length-1; i >= 0; i--)
    {
        uusisana += sana[i];
    }
    console.log(uusisana)
}

kaanto("Hevonen")
kaanto("Innostunutsonni")

/* Tehtävä 5 - maksimiarvo taulukosta */

function maksimi()
{
    var taulukko = [6, 7, 2, 4, 3, 8, 1]
    var maksimi = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] > maksimi)
        {
            maksimi = taulukko[i];
        }
        
    }
    console.log(`Taulukon ${taulukko} maksimi arvo on ${maksimi}`);
}
maksimi();

/* Tehtävä 6 - taulukon keskiarvo */
function keskiarvo()
{
    var taulukko = [6, 7, 2, 4, 3, 8, 1]
    var summa = 0;
    for(var i = 0; i < taulukko.length; i++)
    {
        summa += taulukko[i];
    }
    console.log(`Taulukon ${taulukko} keskiarvo on ${summa / taulukko.length}`)
}
keskiarvo();

/* Tehtävä 7 - uppercase */
function uppercase()
{
    var taulukko = ["a", "b", "c", "d", "e", "f"]
    var uusitaulukko = [];
    for(var i = 0; i < taulukko.length; i++)
    {
        uusitaulukko.push(taulukko[i].toUpperCase());
    }
    console.log(uusitaulukko)
}
uppercase();

/* Tehtävä 8 - seitsemäs pariton esiintyminen */
function seitsemas()
{
    var taulukko =  [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
    var laskuri=0;
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] % 2 == 1)
        {
            laskuri++;
            if (laskuri == 7)
            {
                console.log(taulukko[i])
            }
        }
    }
}
seitsemas();

/* Tehtävä 9 - toiseksi suurin taulukosta */
function toiseksiSuurin()
{
    var taulukko =  [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3]
    var suurin, toiseksisuurin;
    suurin = taulukko[0];
    for(var i = 0; i < taulukko.length; i++)
    {
        if(taulukko[i] > suurin)
        {
            toiseksisuurin = suurin;
            suurin = taulukko[i];
        }
    }
    console.log(`Toiseksi suurin luku taulukosta ${taulukko} on ${toiseksisuurin}`)
}
toiseksiSuurin()

/* Tehtävä 10 - 3, 5, 15 tulostus */
function jaolliset()
{
    for(var i = 0; i <=100; i++)
    {
        if(i % 15 == 0)
        {
            console.log(" viisitoista")
        }
        if(i % 5 == 0)
        {
            console.log(" viisi")
        }
        if(i % 3 == 0)
        {
            console.log(" kolme")
        }
        else{
            console.log(" " + i)
        }
    }
}
jaolliset();

/* Tehtävä 11 - Fibonaccin numerot */

function fibonacci()
{
    var fibo = [0, 1];
    for(var i = 2; i <10; i++)
    {
        fibo.push(fibo[(i-2)] + fibo[(i-1)]);
        
    }
    console.log(fibo)
}

/* Tehtävä 12 - Palidromi */
function palidromi(sana)
{
    var uusisana = "";
    for(var i = sana.length-1; i >= 0; i--)
    {
        uusisana += sana[i];
    }
    if(uusisana == sana)
    {
        console.log("Sana on palidromi")
    }
    else{
        console.log("Sana ei ole palidromi")
    }
}

palidromi("aaroporaa")
palidromi("aaro")
palidromi("innostunutsonni")

/* Tehtävä 13 - Fibonaccin parillisten lukujen summa */
function fibonacci()
{
    var fibo = [0, 1];
    var summa = 0;
    for(var i = 2; i <10; i++)
    {
        fibo.push(fibo[(i-2)] + fibo[(i-1)]);
        
    }
    for(var i = 0; i < fibo.length; i++)
    {
        if(fibo[i] % 2 == 0) 
        {
            summa += fibo[i];
        }
    }
    console.log(fibo)
    console.log(summa)
}

fibonacci()

/* Tehtävä 14 - Fibonaccin parittomien lukujen summa */
function fibonacci()
{
    var fibo = [0, 1];
    var summa = 0;
    for(var i = 2; i <10; i++)
    {
        fibo.push(fibo[(i-2)] + fibo[(i-1)]);
        
    }
    for(var i = 0; i < fibo.length; i++)
    {
        if(fibo[i] % 2 != 0) 
        {
            summa += fibo[i];
        }
    }
    console.log(fibo)
    console.log(summa)
}

fibonacci()

/* Tehtävä 15 - kahden muuttujan suurin yhteinen nimittäjä */
function suurinNimittaja(a, b)
{
    var temp;
    if (b > a)
    {
        temp = a;
        a = b;
        b = temp;
    }
    while ( b > 0)
    {
         temp = b;
         b = a % b;
         a = temp;
    }
    console.log("Muuttujien yhteinen nimittäjä on " + temp)
}
suurinNimittaja(66, 12)

/* Tehtävä 16 - merkkijono ilman pilkkuja */
function numeroJono(merkkijono)
{
    var numerot = merkkijono.split(",")
    var numero;
    var tulostettavatNumerot = [];
    for(var i = 0; i < numerot.length; i++)
    {
        numero = numerot[i].trim();
        if(!isNaN(numero))
        {
            tulostettavatNumerot.push(numero)
        }
    }
    console.log(tulostettavatNumerot.join(" "))
}

numeroJono('7, 3, 9, 2, 44, 90, 123')