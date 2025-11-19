async function horoskooppi()
{
    merkki = document.getElementById("merkki").value;
    console.log(merkki);
    const url = 'https://horoscopes-ai.p.rapidapi.com/get_horoscope/' + merkki + '/today/general/en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
            'x-rapidapi-host': 'horoscopes-ai.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        vastaus.innerHTML = result.sign + ", " + result.period + ", " + result.language + "<br />" + result.general[0];
    } catch (error) {
        console.error(error);
    }
}