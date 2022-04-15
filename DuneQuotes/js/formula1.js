//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
console.log("Dune Quotes!")

function getFetch(){
  //const choice = document.querySelector('input').value
  const url = 'https://the-dune-api.herokuapp.com/quotes'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText=data[0].quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}