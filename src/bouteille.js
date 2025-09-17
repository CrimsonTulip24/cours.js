class Bouteille {
    constructor(nom_bouteille, contenance_bouteille, marque_bouteille, type_bouteille){
        this.nom = nom_bouteille;
        this.contenance = contenance_bouteille;
        this.marque = marque_bouteille;
        this.type = type_bouteille;
    }
}
const eau = new Bouteille("eau", 50, "Cristalline", "plastique");

class Habitation{
    constructor(nom_maison, largeur_maison, longueur_maison, nbrEtage){
        this.nom = nom_maison;
        this.largeur = largeur_maison;
        this.longueur = longueur_maison;
        this.etage = nbrEtage;
    }
    superficie() {
            return this.largeur * this.longueur * this.etage;
        }
}

const appartement = new Habitation("appartement", 8, 12, 1);
const maison = new Habitation("maison", 12, 24, 2);
const chateau = new Habitation("château", 24, 48, 4);

console.log("L'habitation " + maison.nom + " à une superficie de " + maison.superficie() + "m2");
console.log("L'habitation " + appartement.nom + " à une superficie de " + appartement.superficie() + "m2");
console.log("L'habitation " + chateau.nom + " à une superficie de " + chateau.superficie() + "m2");