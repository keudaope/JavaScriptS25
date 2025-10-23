function muokkaa()
{
    let aakkoset = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö'];
    let sana = document.getElementById("sana").value;
    let salasana = "";
    for(var i = 0; i < sana.length; i++)
    {
        salasana += sana[i] + aakkoset[Math.floor(Math.random()*aakkoset.length)];
    }
    document.getElementById("vastaus").innerHTML = salasana;
}