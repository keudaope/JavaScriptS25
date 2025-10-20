function suurin()
{
    let eka = document.getElementById("1").value;
    let toka = document.getElementById("2").value;
    let kolmas = document.getElementById("3").value;
    let neljas = document.getElementById("4").value;
    let viides = document.getElementById("5").value;
    let taulu = [];
    taulu.push(eka, toka, kolmas, neljas, viides);
    //taulu.sort((a, b) => (a-b));
    let vastaus = document.getElementById("t2v");
    vastaus.innerHTML = `Suurin numero on ${Math.max(...taulu)}`
}