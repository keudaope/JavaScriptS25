function oddOrEven()
{
    let arvo = document.getElementById("luku").value;
    let vastaus = document.getElementById("t3v");
    if(arvo%2 == 0)
    {
        vastaus.innerHTML = "Luku on parillinen";
    }
    else{
        vastaus.innerHTML = "Luku on pariton"
    }

}