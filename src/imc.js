export default class IMC {
    constructor(unNom, unPoids, uneTaille){
        this.nom = unNom;
        this.poids = unPoids;
        this.taille = uneTaille;
    }
    calcIMC(){
        let calc = this.poids/(this.taille**2);
        return calc.toFixed(2)
    }
    display(){
            console.log(`${this.nom} (${this.poids}kg, ${this.taille}M) a un IMC de ${this.calcIMC()}`)
    }
}
