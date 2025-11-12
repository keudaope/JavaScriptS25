// Projekti 5_Muistipeli.js - korjattu ja robusti versio

let ensimmainenKortti = null;
let toinenKortti = null;
let voiKlikata = true;
let loydettyjaPareja = 0;
let klikkauskertoja = 0;

let ajastin = null;
let sekunnit = 0;

// Apufunktio: turvattu getElement
function $id(id) { return document.getElementById(id); }

// ========== LUO PELI ==========
function luo() {
  // Poista mahdollinen vanha ajastin heti
  if (ajastin) {
    clearInterval(ajastin);
    ajastin = null;
  }

  let korkeus = parseInt($id("korkeus").value);
  let leveys = parseInt($id("leveys").value);

  if (!korkeus || !leveys || korkeus < 1 || leveys < 1 || korkeus > 6 || leveys > 6) {
    alert("Anna korkeus ja leveys (1–6)!");
    return;
  }

  let korttienMaara = korkeus * leveys;
  if (korttienMaara % 2 !== 0) {
    alert("Korttien määrä pitää olla parillinen!");
    return;
  }

  // Nollaa peli-tila ja näkymä ennen uuden luomista
  nollaaNakyma();

  // Luo ja sekoita korttilista
  let kortit = luoKorttiLista(korttienMaara);

  // Näytä vain tarvittavat rivit ja solut
  naytaRivit(korkeus);

  // Aseta kortit näkyville ja anna niille arvot sekä onclick
  asetaKortit(korkeus, leveys, kortit);

  // Aloita ajastin
  sekunnit = 0;
  $id("aika").textContent = "Aika: 00:00:00";
  ajastin = setInterval(paivitaKello, 1000);

  // Nollaa pelitilamuuttujat
  ensimmainenKortti = null;
  toinenKortti = null;
  voiKlikata = true;
  loydettyjaPareja = 0;
  klikkauskertoja = 0;
  $id("arvaukset").textContent = "Arvausten määrä: 0";
}

// ========= LUO & SEKOITA KORTTILISTA =========
function luoKorttiLista(korttienMaara) {
  let kortit = [];
  let pareja = korttienMaara / 2;
  for (let i = 1; i <= pareja; i++) {
    kortit.push(i, i);
  }
  // Fisher–Yates shuffle
  for (let i = kortit.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [kortit[i], kortit[j]] = [kortit[j], kortit[i]];
  }
  return kortit;
}

// ========= NÄYTÄ/HIDE RIVIT =========
function naytaRivit(korkeus) {
  for (let i = 1; i <= 6; i++) {
    let rivi = $id("Rivi" + i);
    if (!rivi) continue;
    rivi.style.display = (i <= korkeus) ? "table-row" : "none";
  }
}

// ========= ASETA KORTIT =========
function asetaKortit(korkeus, leveys, kortit) {
  let idx = 0;
  for (let r = 0; r < korkeus; r++) {
    for (let s = 0; s < 6; s++) {
      let id = "Kuva" + (r * 6 + s);
      let img = $id(id);
      if (!img) continue;

      if (s < leveys) {
        img.style.display = ""; // näkyviin
        img.src = "Kuvat/kuva0.png";
        img.dataset.arvo = kortit[idx]; // asetetaan arvo
        img.dataset.loydetty = "ei";

        // Asetetaan onclick ohjelmallisesti (varmempi kuin HTML-attribuutti)
        img.onclick = function() { kaannaKortti(id); };

        idx++;
      } else {
        // piilota solut, joita ei käytetä
        img.style.display = "none";
        img.dataset.arvo = ""; 
        img.dataset.loydetty = "ei";
        img.onclick = null;
      }
    }
  }
}

// ========= KÄÄNNÄ KORTTI =========
function kaannaKortti(korttiID) {
  if (!voiKlikata) return;
  let kortti = $id(korttiID);
  if (!kortti) return;
  if (kortti.dataset.loydetty === "kylla") return;
  if (ensimmainenKortti && ensimmainenKortti.id === korttiID) return;

  // jos kortilla ei ole arvoa (esim. ei näkyvissä), älä tee mitään
  if (!kortti.dataset.arvo) return;

  kortti.src = "Kuvat/kuva" + kortti.dataset.arvo + ".png";

  if (ensimmainenKortti === null) {
    ensimmainenKortti = kortti;
    return;
  }

  toinenKortti = kortti;
  klikkauskertoja++;
  $id("arvaukset").textContent = "Arvausten määrä: " + klikkauskertoja;
  tarkistaKortit();
}

// ========= TARKISTA KORTIT =========
function tarkistaKortit() {
  voiKlikata = false;
  if (!ensimmainenKortti || !toinenKortti) {
    voiKlikata = true;
    return;
  }

  let arvo1 = ensimmainenKortti.dataset.arvo;
  let arvo2 = toinenKortti.dataset.arvo;

  if (arvo1 === arvo2) {
    ensimmainenKortti.dataset.loydetty = "kylla";
    toinenKortti.dataset.loydetty = "kylla";
    loydettyjaPareja++;

    // Pieni viive jotta pelaaja näkee parin
    setTimeout(() => {
      ensimmainenKortti = null;
      toinenKortti = null;
      voiKlikata = true;
      tarkistaVoitto();
    }, 300);

  } else {
    // Ei täsmää — peitetään takaisin
    setTimeout(() => {
      if (ensimmainenKortti) ensimmainenKortti.src = "Kuvat/kuva0.png";
      if (toinenKortti) toinenKortti.src = "Kuvat/kuva0.png";
      ensimmainenKortti = null;
      toinenKortti = null;
      voiKlikata = true;
    }, 800);
  }
}

// ========= TARKISTA VOITTO =========
function tarkistaVoitto() {
  let korkeus = parseInt($id("korkeus").value);
  let leveys = parseInt($id("leveys").value);
  let kaikkiParit = (korkeus * leveys) / 2;
  if (loydettyjaPareja === kaikkiParit) {
    if (ajastin) { clearInterval(ajastin); ajastin = null; }
    setTimeout(() => {
      alert("Onneksi olkoon! Löysit kaikki parit!\nArvauksia: " + klikkauskertoja + "\nAika: " + muutaSekunneiksAjaksi(sekunnit));
    }, 300);
  }
}

// ========= AJASTIN =========
function paivitaKello() {
  sekunnit++;
  $id("aika").textContent = "Aika: " + muutaSekunneiksAjaksi(sekunnit);
}
function muutaSekunneiksAjaksi(sek) {
  let h = Math.floor(sek / 3600);
  let m = Math.floor((sek % 3600) / 60);
  let s = sek % 60;
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

// ========= RESET / NOLLAUS =========
function reset() {
  if (ajastin) { clearInterval(ajastin); ajastin = null; }
  nollaaNakyma();

  ensimmainenKortti = null;
  toinenKortti = null;
  voiKlikata = true;
  loydettyjaPareja = 0;
  klikkauskertoja = 0;
  sekunnit = 0;

  $id("arvaukset").textContent = "Arvausten määrä: 0";
  $id("aika").textContent = "Aika: 00:00:00";
}

function nollaaNakyma() {
  // Palauta kaikki 36 paikkaa "peitetyiksi" ja poista datasetit
  for (let i = 0; i < 36; i++) {
    let img = $id("Kuva" + i);
    if (!img) continue;
    img.src = "Kuvat/kuva0.png";
    img.dataset.arvo = "";
    img.dataset.loydetty = "ei";
    img.style.display = ""; // näkyvä oletus (nayta; luo() piilottaa tarpeettomat)
    img.onclick = null;
  }
}
