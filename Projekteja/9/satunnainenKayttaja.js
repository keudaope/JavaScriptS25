function arvo()
{
    kayttaja = document.getElementById("kayttaja");

try {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            var d = data.results[0];
            kayttaja.innerHTML = 
            "<img src=" + d.picture.thumbnail + "><br>" + 
            d.name.title + " " + d.name.first + " " + d.name.last + "<br>" +
            d.location.street.number + " " + d.location.street.name + "<br>" +
            d.location.postcode + " " + d.location.city + "<br>" +
            d.location.state + " " + d.location.country + "<br>" + 
            d.email + "<br>" + d.phone;
        });
        

} catch (error) {
    console.error(error);
}
}