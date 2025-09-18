export default class Vehicule {
    constructor(nomVehicule, nbrRoue, vitesse){
        this.nom = nomVehicule;
        this.roue = nbrRoue;
        this.vitesse = vitesse;
    }
    detect() {
        if(this.roue == 2) {
            return "Moto";
        } else if(this.roue == 4) {
            return "Voiture"; 
        } else {
            return "Indiquez le nombre de roues."
        }
    }
}

/* Exercice 3 :

-Exécuter la méthode detect() sur les 2 objets voiture et moto dans le fichier test_vehicule.js.
-Afficher le type de Vehicule dans le fichier test_vehicule.js,

-Créer une méthode boost qui ajoute + 50 à la vitesse d’un objet dans le fichier de classe vehicule.js,

-Appliquer la méthode boost a la voiture dans le fichier test_vehicule.js,
-Afficher la nouvelle vitesse de la voiture dans le fichier test_vehicule.js.
Bonus :
-Créer une méthode plusRapide() dans le fichier vehicule.js (classe Vehicule) qui : 
Prend un object Vehicule en paramètre et
compare la vitesse des différents véhicules (this et celui en paramètre) et retourne le Vehicule le plus rapide des 2 avec un return.
Sous la forme : le vehicule : "nom du vehicule" est le plus rapide

-Exécuter la méthode plusRapide() dans le fichier test_vehicule.js.
-Afficher le Vehicule le plus rapide dans le fichier test_vehicule.js.

NB : Tous les affichages se feront dans la console. */