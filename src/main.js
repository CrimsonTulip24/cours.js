import './style.css'

import { apiKey } from './env'

const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)

/* .then(response=>{
  console.log(response)
  return response
})
.then((data)=>{
  return data.json();
}); */

// Premiere methode
    .then(response => response.json())
    .then(data => {
        console.log(data) // console.log directement intégré a la fonction
    });

console.log(meteo);

// Deuxième methode
const apiMeteo = async () => {
    return await fetch ('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
        .then(response => {
            return response.json();
        })
}

apiMeteo().then(json => { // console.log deuxieme methode
    console.log(json);
});