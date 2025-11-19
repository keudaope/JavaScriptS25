// Hae elementit
let lists = document.querySelectorAll(".list");   // NodeList, jolla on forEach
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

// Valitun elementin muuttuja pitää olla ulkopuolella,
// jotta drop-käsittelijät näkevät sen
let selected = null;

// Lisätään dragstart kaikkiin list-elementteihin
lists.forEach(list => {
    list.addEventListener("dragstart", function (e) {
        selected = e.target;
    });
});

// Oikea laatikko
rightBox.addEventListener("dragover", function (e) {
    e.preventDefault(); // sallii pudottamisen
});

rightBox.addEventListener("drop", function (e) {
    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
});

// Vasen laatikko
leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

leftBox.addEventListener("drop", function (e) {
    if (selected) {
        leftBox.appendChild(selected);
        selected = null;
    }
});