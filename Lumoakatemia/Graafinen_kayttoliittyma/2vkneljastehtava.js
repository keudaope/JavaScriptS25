function summaKeskiarvo()
{
    let luku1 = parseInt(document.getElementById("1").value);
    let luku2 = parseInt(document.getElementById("2").value);
    let luku3 = parseInt(document.getElementById("3").value);
    let luku4 = parseInt(document.getElementById("4").value);
    let luku5 = parseInt(document.getElementById("5").value);
    let summa, keskiarvo;
    summa = luku1 + luku2 + luku3 + luku4 + luku5;
    keskiarvo = summa / 5;

    document.getElementById("vastaus").innerHTML = `Lukujen summa on ${summa} ja keskiarvo on ${keskiarvo}`;
}