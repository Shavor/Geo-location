const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
	navigator.geolocation.getCurrentPosition(showPositon);
});

function showPositon(positon){
	userLocation.innerHTML = `
		Latitude: ${positon.coords.latitude} <br>
		Longitude: ${positon.coords.longitude}
	`;
}