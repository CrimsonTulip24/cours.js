import CompteBancaire from "./compteBanque.js";

const nom = document.getElementById("nom");
const creer = document.getElementById("create");
const compteName = document.getElementById("compte");
const montant = document.getElementById("montant");
const crediter = document.getElementById("crediter");
const retirer = document.getElementById("retirer");
const message = document.getElementById("message");
const cible = document.getElementById("cible");
const source = document.getElementById("source");
const montantVir = document.getElementById("montant_virement");
const faireVir = document.getElementById("virement");

const listeCompte = []

creer.addEventListener("click", function(){
    listeCompte.push(new CompteBancaire(nom.value, 0));
    console.log(listeCompte);
});

crediter.addEventListener("click", function(){
    for(let i = 0; i < listeCompte.length; i++){
        if(compteName.value === listeCompte[i].nom){
            listeCompte[i].solde += parseInt(montant.value);
            return console.log(listeCompte)
        }
    }
})

retirer.addEventListener("click", function(){
    for(let i = 0; i < listeCompte.length; i++){
        if(compteName.value === listeCompte[i].nom){
            listeCompte[i].solde -= parseInt(montant.value);
            return console.log(listeCompte)
        }
    }
})

faireVir.addEventListener("click", function(){
    for(let i = 0; i < listeCompte.length; i++){
        if(cible.value === listeCompte[i].nom){
            listeCompte[i].solde += parseInt(montant.value);
        }
    }
    for(let j = 0; j < listeCompte.length; j++){
        if(source.value === listeCompte[j].nom){
            listeCompte[j].solde -= parseInt(montant.value);
        }
    }
    return console.log(listeCompte)
})