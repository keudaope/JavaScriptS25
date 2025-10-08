 // Luodaan Henkilo-luokka
 class Henkilo {
    constructor(etunimi, sukunimi, ika) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }

    NaytaTiedot() {
        console.log("Etunimi:", this.etunimi);
        console.log("Sukunimi:", this.sukunimi);
        console.log("Ikä:", this.ika);
    }
}

// Luodaan Risto-olio uusilla tiedoilla
const risto = new Henkilo("Risto", "Reipas", 10);

// Käytetään NaytaTiedot-funktiota Riston tietojen tulostamiseen
risto.NaytaTiedot();
risto.sukunimi = "Reippaampi";
risto.ika = 11;
risto.NaytaTiedot();