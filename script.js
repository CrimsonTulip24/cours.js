const quantite = document.getElementById("quantite");
const prix = document.getElementById("prix_ht");
const produit = document.getElementById("nom_produit")
const calcul = document.querySelector("button");
const resultat = document.getElementById("resultat");

calcul.addEventListener("click", function(){
    if(quantite.value.trim() !== "" && prix.value.trim() !== "" && produit.value.trim() !== "") {
        if(isNaN(quantite.value) && isNaN(prix.value)){
            resultat.innerText = "Le prix et la quantité doivent être indiqué en chiffres."
        } else {
            let total = prix.value*100/80*quantite.value;
            resultat.innerText = "$"+total;
        } 
    } else {
        resultat.innerText = "Veuillez remplir tout les champs."
    }
})





/* Créer une page HTML qui va contenir les élements suivants :
un input de type text avec id nom_produit,
un input de type text avec id_quantite,
un input de type text avec id_prix_ht,
un bouton id_calculer,
une div avec id resultat,

Partie JS :
créer un écouteur d'évenement clic sur le bouton
créer un programme qui va au clic :
vérifier si les 3 champs sont remplis,
calculer le montant TTC :
prix_ht x quantite,

Afficher dans le dom (div id resultat) le résultat du calcul.
ou une erreur si les champs ne sont pas tous remplis. 
 */