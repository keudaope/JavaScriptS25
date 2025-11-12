function arvo()
{
    kayttaja = document.getElementById("kayttaja");

try {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => 
        {
            console.log(data);
            var l = data.results[0];
            kayttaja.innerHTML = 
            "<img src=" + l.picture.thumbnail + "><br>" + 
            l.name.title + " " + l.name.first + " " + l.name.last + "<br>" +
            l.location.street.number + " " + l.location.street.name + "<br>" +
            l.location.postcode + " " + l.location.city + "<br>" +
            l.location.state + " " + l.location.country + "<br>" + 
            l.email + "<br>" + l.phone;
        });
        

} catch (error) {
    console.error(error);
}
}