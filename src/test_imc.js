import IMC from './imc.js';

const list = [
    new IMC("Sébastien Chabel", 135, 1.7),
    new IMC("Escaladeuse", 45, 1.68),
    new IMC("Jojo", 300, 2),
    new IMC("Gontrand", 90, 1.75),
    new IMC("Colonel Moutarde", 200, 1.75),
    new IMC("Josiane de la Vega", 99, 1.55),
];

for(let i = 0; i < list.length; i++){
    list[i].display();
}

for(const newimc of list){
    newimc.display();
}