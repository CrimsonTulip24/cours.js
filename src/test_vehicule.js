import Vehicule from './vehicule.js';

const voiture = new Vehicule("Mercedes CLK", 4, 250);
const moto = new Vehicule("Honda CBR", 2, 280);

function boost(){
    return this.vitesse += 50;
}

function rapide(a,b){
    if(a.vitesse > b.vitesse) {
        return `${a.nom} est plus rapide.`
    } else {
        return `${b.nom} est plus rapide.`
    }
}

console.log(rapide(moto, voiture))