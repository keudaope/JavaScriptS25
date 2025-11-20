// script.js

document.addEventListener("DOMContentLoaded", () => {

    // ***********************
    // 1. Poiston varmistus
    // ***********************

    // Haetaan kaikki poistolinkit
    const deleteLinks = document.querySelectorAll(".delete-link");

    deleteLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Näytetään varoitus
            if (!confirm("Haluatko varmasti poistaa asiakkaan?")) {
                e.preventDefault(); // Estää navigoinnin
            }
        });
    });

    // ***********************
    // 2. Lomakevalidointi (front-end)
    // ***********************

    const form = document.querySelector(".customer-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {

        let errors = [];           // Tänne kerätään virheilmoitukset
        let firstInvalidField = null;

        const nimi = form.querySelector("#nimi");
        const osoite = form.querySelector("#osoite");
        const postinumero = form.querySelector("#postinumero");
        const postitoimipaikka = form.querySelector("#postitoimipaikka");
        const sahkoposti = form.querySelector("#sahkoposti");
        const puhelin = form.querySelector("#puhelin");

        // Tarkistetaan pakolliset kentät
        if (!nimi.value.trim()) { errors.push("Nimi on pakollinen."); firstInvalidField ??= nimi; }
        if (!osoite.value.trim()) { errors.push("Lähiosoite on pakollinen."); firstInvalidField ??= osoite; }
        if (!postinumero.value.trim()) { errors.push("Postinumero on pakollinen."); firstInvalidField ??= postinumero; }
        if (!postitoimipaikka.value.trim()) { errors.push("Postitoimipaikka on pakollinen."); firstInvalidField ??= postitoimipaikka; }

        // Postinumero = 5 numeroa
        if (postinumero.value && !/^\d{5}$/.test(postinumero.value)) {
            errors.push("Postinumeron tulee olla 5 numeroa.");
            firstInvalidField ??= postinumero;
        }

        // Sähköposti, jos annettu → perusmuotokontrolli
        if (sahkoposti.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(sahkoposti.value)) {
            errors.push("Sähköposti ei ole oikeassa muodossa.");
            firstInvalidField ??= sahkoposti;
        }

        // Puhelin: numerot, +, välilyönnit ja -
        if (puhelin.value && !/^[0-9+\s-]{5,20}$/.test(puhelin.value)) {
            errors.push("Puhelinnumerossa saa olla vain numeroita, + tai -.");
            firstInvalidField ??= puhelin;
        }

        // Jos virheitä → estetään lähetys
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));       // Näytetään virheet
            firstInvalidField?.focus();     // Kohdistus ensimmäiseen virheeseen
        }
    });
});
