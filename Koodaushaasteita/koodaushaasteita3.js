// tehtävä 1
function IsoAlku(sana)
{
    if(sana[0] == sana[0].toUpperCase())
        console.log("Sana alkaa isolla kirjaimella")
    else
        console.log("Sana ei ala isolla kirjaimella")
}

IsoAlku("Sana")
IsoAlku("sana")

// Tehtävä 2
function siisti(sana)
{
    console.log(sana.trim());
}

siisti("     sana      ");

// Tehtävä 3
function laskeVokaalit(sana)
{
    var laskuri = 0;
    for(var i = 0; i < sana.length; i++)
    {
        if(sana[i] == "a" || sana[i] == "e" || sana[i] == "i" || sana[i] == "o" || sana[i] == "u" || sana[i] == "y" || sana[i] == "ä" || sana[i] == "ö")
        {
            laskuri++;
        }
    }
    console.log(`Sanassa ${sana} on ${laskuri} vokaalia`);
}
laskeVokaalit("Epätäydellinenköhän")

// Tehtävä 4

function onAlfanumeerinen(str) {
  // Käytetään säännöllistä lauseketta tarkistukseen
  const alfanumeerinenRegex = /^[a-zA-Z0-9]+$/;
  return alfanumeerinenRegex.test(str);
}

console.log(onAlfanumeerinen("1234567"));

// Tehtävä 5
function onPostinumero(str) {
  // Säännöllinen lauseke: tarkistaa että merkkijono koostuu tasan viidestä numerosta
  const postinumeroRegex = /^\d{5}$/;
  return postinumeroRegex.test(str);
}

// Esimerkkejä
console.log(onPostinumero("04200")); // true
console.log(onPostinumero("1234"));  // false (liian lyhyt)
console.log(onPostinumero("123456")); // false (liian pitkä)
console.log(onPostinumero("12a45")); // false (ei pelkkiä numeroita)

// Tehtävä6

function onSotuMuodollisestiOikein(sotu) {
  // Säännöllinen lauseke: tarkistaa muodon PPKKVVXNNNY
  const sotuRegex = /^\d{6}[-A]\d{3}[0-9A-Z]$/;
  return sotuRegex.test(sotu);
}

// Esimerkkejä
console.log(onSotuMuodollisestiOikein("081085A123X")); // true
console.log(onSotuMuodollisestiOikein("081085-1234")); // false (liikaa merkkejä)
console.log(onSotuMuodollisestiOikein("081085A12X"));  // false (liian vähän numeroita)
console.log(onSotuMuodollisestiOikein("081085B123X")); // false (väärä erottelumerkki)

// Tehtävä 7

function sisaltaaHtmlTagin(str) {
  // Säännöllinen lauseke, joka etsii HTML-tägejä
  const htmlTagRegex = /<[^>]+>/;
  return htmlTagRegex.test(str);
}

// Esimerkkejä
console.log(sisaltaaHtmlTagin("<p>Tämä on kappale</p>")); // true
console.log(sisaltaaHtmlTagin("Tämä on teksti ilman tageja")); // false
console.log(sisaltaaHtmlTagin("Teksti <strong>vahva</strong>")); // true
console.log(sisaltaaHtmlTagin("Teksti < väärä merkki")); // fals
