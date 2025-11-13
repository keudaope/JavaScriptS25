async function api()
{
    var vastaus = document.getElementById("vastaus");
const url = 'https://quotes-api12.p.rapidapi.com/dev-jokes?category=all&subcategory=javascript';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
		'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    vastaus.innerHTML = result.joke;
} catch (error) {
	console.error(error);
}

}