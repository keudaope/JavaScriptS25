// Tehtävä 1 - Armstrongin luvut
function armstrong()
{
    
        var amst = []
    for(var i = 100; i <= 999; i++)
    {
        let temp = i.toString().split("");
        if(temp[0]**3 + temp[1]**3 + temp[2]**3 == i)
        {
            amst.push(i);
        }
    }
    console.log(amst)
}

armstrong();

function joulukuusi()
{
    let height = 5;

    for (let i = 1; i <= height; i++) {
      console.log('*'.repeat(i));
    }
}


joulukuusi();

// Tehtävä 3
function vaihdaKirjaimet(sana)
{
    temp = sana.toString().split("");
    for (var i = 0; i < temp.length; i++)
    {
        if(temp[i] == "a")
            temp[i] = 4;
        else if(temp[i] == "e")
            temp[i] = 3
        else if(temp[i] == "i")
            temp[i] = 1
        else if(temp[i] == "o")
            temp[i] = 0
        else if(temp[i] == "s")
            temp[i] = 5
    }
    temp = temp.join("")
    console.log(temp)
}

vaihdaKirjaimet("Ohjelmointi on hauskaa");

// Tehtävä 4
function hikup()
{
    for(var i = 1; i<=100; i++)
    {
        if(i % 15 == 0)
            console.log("hikup")
        else if(i % 5 == 0)
            console.log("up")
        else if(i % 3 == 0)
            console.log("hik")
        else
            console.log(i)
    }
}
hikup();