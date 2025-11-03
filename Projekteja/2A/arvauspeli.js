let oikeaLuku;
let arvaukset;
let voitot = 0;
let tappiot = 0;

function alustaPeli() {
  oikeaLuku = Math.floor(Math.random() * 10) + 1;
  arvaukset = 3;
  document.getElementById("status").textContent = "";
  document.getElementById("info").textContent = "Valitse numero:";
  luoNumerot(1, 10);
}

function luoNumerot(min, max) {
  const container = document.getElementById("numerot");
  container.innerHTML = "";
  for (let i = min; i <= max; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = function() { arvaa(i); };
    container.appendChild(btn);
  }
}

function arvaa(luku) {
  arvaukset--;
  if (luku === oikeaLuku) {
    document.getElementById("status").textContent = "Oikein! Voitit pelin!";
    voitot++;
    document.getElementById("voitot").textContent = voitot;
    luoNumerot(0, -1);
  } else if (arvaukset > 0) {
    if (luku > oikeaLuku) {
      document.getElementById("status").textContent = "Pienempi!";
      luoNumerot(1, luku - 1);
    } else {
      document.getElementById("status").textContent = "Suurempi!";
      luoNumerot(luku + 1, 10);
    }
  } else {
    document.getElementById("status").textContent = "Hävisit! Oikea vastaus oli " + oikeaLuku;
    tappiot++;
    document.getElementById("tappiot").textContent = tappiot;
    luoNumerot(0, -1);
  }
}

document.getElementById("uusiPeli").onclick = alustaPeli;
alustaPeli();