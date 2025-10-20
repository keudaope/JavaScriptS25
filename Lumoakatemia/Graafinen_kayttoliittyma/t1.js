function jarjesta()
{
    
    let taulu=[];
    let eka = document.getElementById("eka").value;
    let toka = document.getElementById("toka").value;
    let kolmas = document.getElementById("kolmas").value;
    let vastaus = document.getElementById("t1v");
    let teksti = "";
    taulu.push(eka, toka, kolmas);
    teksti = `Annoit luvut ${eka}, ${toka}, ${kolmas}<br>`;
    let uusitaulu = taulu.sort((a,b) => (a - b));
    teksti+= `Luvut järjestyksessä ovat ${uusitaulu}`;
    vastaus.innerHTML = teksti;
    return false;
}