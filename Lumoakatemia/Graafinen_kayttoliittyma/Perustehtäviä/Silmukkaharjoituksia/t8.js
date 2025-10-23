function korota()
{
    let luku = document.getElementById("korotettava").value;
    let potenssi = document.getElementById("potenssi").value;
    let vastaus = luku ** potenssi;

    document.getElementById("vastaus").innerHTML = vastaus;
}