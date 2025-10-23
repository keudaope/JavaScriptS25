function tulosta()
{
    let vastaus = "";
    for(let i = 1; i <=100; i++)
    {
        if(i % 15 == 0)
        {
            vastaus+= " hipheijaa"
        }
        else if(i % 5 == 0)
        {
            vastaus += " heijaa"
        }
        else if(i % 3 == 0)
        {
            vastaus += " hip"
        }
        else
        {
            vastaus += " " + i;
        }
    }
    document.getElementById("vastaus").innerHTML = vastaus;
}