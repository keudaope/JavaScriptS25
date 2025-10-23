function tulosta()
{
    vastaus = "";
    for(let i = 1; i <= 10; i++)
    {
        vastaus += i + " ";
    }
    document.getElementById("vastaus").innerHTML = vastaus;
}