function weatherHBG( cityID ) {
    var key = 'f6cac1d6019a5f1f56e461991a2a19aa';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)   
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        console.log(data);
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}
  window.onload = function() {
    weatherHBG( 2706766 );
  }

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('fahrenheit').innerHTML = fahrenheit + 'F';
	document.getElementById('location').innerHTML = d.name;
    document.getElementById('country').innerHTML =d.sys.country;
    
	
	if( description.indexOf('rain') > 0 ) {
  	document.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.className = 'sunny';
  }
  
}
