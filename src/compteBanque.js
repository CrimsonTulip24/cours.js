export default class CompteBancaire{
    constructor(nom, solde){
        this.nom = nom;
        this.solde = solde;
    }

    retrait(montant){
        if(montant > 0 && montant <= this.solde){
            console.log(`Retrait de ${montant} pour ${this.nom}`);
            return this.solde -= montant;
        } else {
            throw new Error("Vous ne pouvez pas effectuer ce retrait")
        }
    }
    ajout(montant){
        console.log(`Ajout de ${montant} pour ${this.nom}`);
        return this.solde += montant;
    }
    virement(a,montant){
        if(montant > 0 && montant <= this.solde){
            console.log(`Virement de ${montant} de ${this.nom} vers ${a.nom}`);
            this.retrait(montant);
            a.ajout(montant);        
        } else {
            throw new Error("Vous ne pouvez pas effectuer ce virement")
        }
    }
}