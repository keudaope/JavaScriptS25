async function nimipaiva()
{
    var vastaus = document.getElementById("vastaus");
    const url = 'https://nameday.abalin.net/api/V2/today';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  vastaus.innerHTML = data.data.fi
} catch (error) {
  console.error(error);
}
}
async function nimesta()
{
  date = '13.11.2025';
  const url = 'https://nameday.abalin.net/api/V2/'+date+'';
  alert(url);
const options = {method: 'GET', headers: {Accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
}
nimipaiva();
