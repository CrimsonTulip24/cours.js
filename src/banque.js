import CompteBancaire from "./compteBanque.js";

const Alex = new CompteBancaire("Alex", 0);
const Clovis = new CompteBancaire("Clovis", 0);
const Marco = new CompteBancaire("Marco", 0);

const client = [Alex, Clovis, Marco]

for(let i = 0; i<client.length; i++){
    client[i].ajout(1000);
}
Marco.virement(Clovis,300);
try{
Alex.retrait(1200);
} catch(Error) {
    console.log(Error.message)
}
for(let i = 0; i<client.length; i++){
console.log(client[i].nom +", solde : " + client[i].solde);
}