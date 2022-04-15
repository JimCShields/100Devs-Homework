//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.metaweather.com/api/location/search/?query='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let woeid = data[0].woeid
       
        const location =`https://www.metaweather.com/api/location/${woeid}`
      fetch(location)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.consolidated_weather[0].weather_state_name
        let weatherIcon = data.consolidated_weather[0].weather_state_abbr
        document.querySelector('img').src = `https://www.metaweather.com/static/img/weather/${weatherIcon}.svg`
        
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

