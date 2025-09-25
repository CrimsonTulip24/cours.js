import { apiKey } from './env'

// On appelle les éléments dont on aura besoin
const meteo = document.getElementById("bloc_meteo");
const city = document.getElementById("city");
const charger = document.getElementById("charger");

// On crée la div 
const box = document.createElement('div');

// Puis on lui applique un style
Object.assign(box.style, {
    display: "flex",
    flexDirection: "column",
});

// On ajoute box comme enfant de bloc_meteo
meteo.appendChild(box)

// On crée 3 titres dans box
for(let i = 0; i<3; i++){
    // On crée le h2
    const titre = document.createElement("h2");
// On ajoute un style
    Object.assign(titre.style, {
        width: "auto",
        height: "10vh",
        backgroundColor: "grey",
        textAlign: "center",
        alignContent: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
    })
    titre.textContent = "";
    titre.setAttribute("id", "title" + (i+1));
    box.appendChild(titre)
}

    const titre1 = document.getElementById("title1");
    const titre2 = document.getElementById("title2");
    const titre3 = document.getElementById("title3");
    const photo = document.createElement('img');


const getMeteoJson = async () => {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&lang=fr&appid=` + apiKey)
    .then(response => {
        Object.assign(photo.style, {
            width: "90px",
            height: "90px",
            alignSelf: "center",
        })
        return response.json();
    })
}

charger.addEventListener("click", () => {
    if(city.value.trim() !== ""){
        getMeteoJson().then(json => {
            if(json.name === undefined){
                titre1.innerText = `La ville n'existe pas !`
                titre2.textContent = ""
                titre3.textContent = ""
            } else {
                titre1.textContent = `Ville : ${json.name}`
                titre2.textContent = `Température : ${json.main.temp}`
                titre3.textContent = `Temps : ${json.weather[0].description}`
                photo.setAttribute("src", `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
                box.appendChild(photo)
            }
        })
    } else {
        alert("Veuillez saisir une ville !")
    }
})