/* Haetaan lomakkeelta painike ja laitetaan sille clickauksen 'kuuntelu' */
var enterButton = document.getElementById("painike");
enterButton.addEventListener("click",lisaaListaanNapauttaessa); // Perässsä funktio, jota kutsutaan

/* Haetaan lomakkeelta syöttökenttä ja laitetaan sille enterin 'kuuntelu' */
var input = document.getElementById("syotto");
input.addEventListener("keypress", lisaaListaanEnterilla); // Perässä funktio, jota kutsutaan

/* Haetaan lomakkeelta järjestämätön lista, johon tehtävät syötetään */
var ul = document.querySelector("ul");

/* Luodaan funktio, joka palauttaa syötetyn merkkijonon pituuden */
function inputLength()
{
  return input.value.length;
}

/* Varsinainen lisäysfunktio */
function luoListaElementti()
{
  var li = document.createElement("li"); // luo "li" elementin
// Tarkistetaan, että on syötetty jotain
if(input.value != '')
{
  li.appendChild(document.createTextNode(input.value)); //lisätään li-elementtiin tekstin, joka on laatikossa
    ul.appendChild(li); //lisää li-elementin ul-elementtiin
    input.value = ""; // Tyhjentää syöttökentän
}

  // Aloitetaan tehdyn tehtävän värjäys
  // koska se on funktiossa, se tekee sen vain lisättyihin tehtäviin
  function crossOut() {
      li.classList.toggle("done");
  }
// Kutsutaan ylläolevaa funktiota
  li.addEventListener("click",crossOut);
  //Tehdyn tehtävän värjäys loppuu


  // Aloitetaan poistopainikkeen lisäys
  var poisto = document.createElement("button"); // luodaan painike-elementti
  poisto.appendChild(document.createTextNode("X")); // Lisätään siihen X-kirjain
  li.appendChild(poisto); // Lisätään se kaikkiin li-elementteihin
  poisto.addEventListener("click", poistaTehtava);
  // Poistopainikkeen lisäys loppuu


  //Lisätään varsinainen poistofunktio (DISPLAY: NONE)
  function poistaTehtava()
{
      li.classList.add("delete")
  }
}// Pääfunktio päättyy


function lisaaListaanNapauttaessa()
{
  if (inputLength() > 0) { //tarkistaa, että on syötetty jotain
      luoListaElementti(); // Kutsuu 'pääfunktiota'
  }
}

function lisaaListaanEnterilla(event)
{
  if (inputLength() > 0 && event.which ===13) { //Tarkistetaan, että Enter on painettu
      //nro 13 on Enterin avainkoodi, voidaan kirjoittaa myös event.keyCode === 13
      luoListaElementti(); // Kutsuu 'pääfunktiota'
  }
}