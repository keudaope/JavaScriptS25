// tehtävä 1
function IsoAlku(sana)
{
    if(sana[0] == sana[0].toUpperCase())
        console.log("Sana alkaa isolla kirjaimella")
    else
        console.log("Sana ei ala isolla kirjaimella")
}

IsoAlku("Sana")
IsoAlku("sana")

function siisti(sana)
{
    console.log(sana.trim());
}

siisti("     sana      ");

function laskeVokaalit(sana)
{
    var laskuri = 0;
    for(var i = 0; i < sana.length; i++)
    {
        if(sana[i] == "a" || sana[i] == "e" || sana[i] == "i" || sana[i] == "o" || sana[i] == "u" || sana[i] == "y" || sana[i] == "ä" || sana[i] == "ö")
        {
            laskuri++;
        }
    }
    console.log(`Sanassa ${sana} on ${laskuri} vokaalia`);
}
laskeVokaalit("Epätäydellinenköhän")