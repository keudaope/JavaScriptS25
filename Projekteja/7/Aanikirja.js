var url = "https://keudaope.github.io/HTML-CSS-JS/JavaScript-main/projektit/p7/sounds/"
aani = elain.id;
var audio = new Audio(url+aani+'.mp3');
function aanet(elain)
{
  audio.play();
}
function stop()
{
  audio.stop();
}