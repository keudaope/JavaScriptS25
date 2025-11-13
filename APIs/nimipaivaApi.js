async function nimipaiva()
{
    var vastaus = document.getElementById("vastaus");
    const url = 'https://nameday.abalin.net/api/V2/today/Helsinki';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  vastaus.innerHTML = data.data.dates
} catch (error) {
  console.error(error);
}



}
nimipaiva();