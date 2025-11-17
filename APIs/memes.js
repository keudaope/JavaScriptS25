async function memes()
{
    const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/create?topics=dogs&max-length=1000';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '527371f994msh57563f768dd80f6p135d33jsn69c07817117b',
		'x-rapidapi-host': 'humor-jokes-and-memes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    document.getElementById("vastaus").innerHTML = result.joke;
} catch (error) {
	console.error(error);
}
}