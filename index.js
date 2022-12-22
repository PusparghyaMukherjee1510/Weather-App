const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '323197bf39mshe14171e698be624p1ff8b5jsn8af375e88640',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
	cityName.innerHTML=city
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
	.then(response => response.json())
	.then(response => {


		console.log(response)

		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset


	})
	.catch(err => console.error(err));
}
submit.addEventListener('click',(e)=>{
	e.preventDefault();
	getWeather(city.value)
})

getWeather("Kolkata");


	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chandigarh',options)
	.then(response => response.json())
	.then(response =>{


                console.log(response);

		cloud_pct_chndg.innerHTML = response.cloud_pct
		temp_chndg.innerHTML = response.temp
		feels_like_chndg.innerHTML = response.feels_like
		humidity_chndg.innerHTML = response.humidity
		min_temp_chndg.innerHTML = response.min_temp
		max_temp_chndg.innerHTML = response.max_temp
		wind_speed_chndg.innerHTML = response.wind_speed
		wind_degrees_chndg.innerHTML = response.wind_degrees
		sunrise_chndg.innerHTML = response.sunrise
		sunset_chndg.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur',options)
	.then(response => response.json())
	.then(response =>{


                console.log(response);

		cloud_pct_jai.innerHTML = response.cloud_pct
		temp_jai.innerHTML = response.temp
		feels_like_jai.innerHTML = response.feels_like
		humidity_jai.innerHTML = response.humidity
		min_temp_jai.innerHTML = response.min_temp
		max_temp_jai.innerHTML = response.max_temp
		wind_speed_jai.innerHTML = response.wind_speed
		wind_degrees_jai.innerHTML = response.wind_degrees
		sunrise_jai.innerHTML = response.sunrise
		sunset_jai.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Guwahati',options)
	.then(response => response.json())
	.then(response =>{


                console.log(response);

		cloud_pct_gua.innerHTML = response.cloud_pct
		temp_gua.innerHTML = response.temp
		feels_like_gua.innerHTML = response.feels_like
		humidity_gua.innerHTML = response.humidity
		min_temp_gua.innerHTML = response.min_temp
		max_temp_gua.innerHTML = response.max_temp
		wind_speed_gua.innerHTML = response.wind_speed
		wind_degrees_gua.innerHTML = response.wind_degrees
		sunrise_gua.innerHTML = response.sunrise
		sunset_gua.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai',options)
	.then(response => response.json())
	.then(response =>{


                console.log(response);

		cloud_pct_chn.innerHTML = response.cloud_pct
		temp_chn.innerHTML = response.temp
		feels_like_chn.innerHTML = response.feels_like
		humidity_chn.innerHTML = response.humidity
		min_temp_chn.innerHTML = response.min_temp
		max_temp_chn.innerHTML = response.max_temp
		wind_speed_chn.innerHTML = response.wind_speed
		wind_degrees_chn.innerHTML = response.wind_degrees
		sunrise_chn.innerHTML = response.sunrise
		sunset_chn.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kochi',options)
	.then(response => response.json())
	.then(response =>{


                console.log(response);

		cloud_pct_koc.innerHTML = response.cloud_pct
		temp_koc.innerHTML = response.temp
		feels_like_koc.innerHTML = response.feels_like
		humidity_koc.innerHTML = response.humidity
		min_temp_koc.innerHTML = response.min_temp
		max_temp_koc.innerHTML = response.max_temp
		wind_speed_koc.innerHTML = response.wind_speed
		wind_degrees_koc.innerHTML = response.wind_degrees
		sunrise_koc.innerHTML = response.sunrise
		sunset_koc.innerHTML = response.sunset
	})

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bhubaneswar',options)
	.then(response => response.json())
	.then(response =>{


                console.log(response);

		cloud_pct_bhb.innerHTML = response.cloud_pct
		temp_bhb.innerHTML = response.temp
		feels_like_bhb.innerHTML = response.feels_like
		humidity_bhb.innerHTML = response.humidity
		min_temp_bhb.innerHTML = response.min_temp
		max_temp_bhb.innerHTML = response.max_temp
		wind_speed_bhb.innerHTML = response.wind_speed
		wind_degrees_bhb.innerHTML = response.wind_degrees
		sunrise_bhb.innerHTML = response.sunrise
		sunset_bhb.innerHTML = response.sunset
	})

