

function syota()
{
  const syottoAvain = document.getElementById('syottoAvain');
  const syottoArvo = document.getElementById('syottoArvo');
  const avain = syottoAvain.value;
  const arvo = syottoArvo.value;

  if(avain && arvo)
  {
    localStorage.setItem(avain, arvo);
    listaa();

  }
}
function listaa()
{
  for(let i = 0; i < localStorage.length; i++)
  {
    const avain = localStorage.key(i);
    const arvo = localStorage.getItem(avain);
    pvSyotto.innerHTML += "<b>"+avain + "</b>: &emsp;" + arvo
    + "&emsp;<button type='button' id=" + avain + " onclick='poista(this)'>Poista tieto</button>"+ "<br/>";
    document.getElementById('syottoArvo').value = "";
    document.getElementById('syottoAvain').value = "";
    //setTimeout(function(){ pvSyotto.innerHTML = ""; }, 10000);

  }
}

function poista(tama)
{
  const avain = tama.id;
  //alert(avain);
  localStorage.removeItem(avain);
  location.reload();
}
