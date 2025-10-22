function tarkista()
{
    let luku = document.getElementById("luku").value;
    if(luku >= 0)
    {
        document.getElementById("vastaus").innerHTML = "Luku on positiivinen";
    }
    else
    {
        document.getElementById("vastaus").innerHTML = "Luku on negatiivinen";
    }
}