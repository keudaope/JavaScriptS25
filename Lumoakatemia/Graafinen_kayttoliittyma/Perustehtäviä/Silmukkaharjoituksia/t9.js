function etsi()
{
    let luku1 = document.getElementById("1").value;
    let luku2 = document.getElementById("2").value;
    let luku3 = document.getElementById("3").value;
    let luku4 = document.getElementById("4").value;
    let luku5 = document.getElementById("5").value;
        let taulu = [];
        taulu.push(luku1, luku2, luku3, luku4, luku5);
    let minimi = taulu[0];
    let maksimi = taulu[0];
    for(var i = 0; i < taulu.length; i++)
    {
        if(taulu[i] < minimi)
        {
            minimi = taulu[i];
        }
        if(taulu[i] > maksimi)
        {
            maksimi = taulu[i]
        }
    }

    document.getElementById("vastaus").innerHTML = `Lukujen minimi on ${minimi} ja maksimi on ${maksimi}`
}