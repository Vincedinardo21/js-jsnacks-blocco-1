// Arrays
var primoArray = ["Aniello", "Oronzo", "Loredano", "Teodomildo", "Ezechiele"];
var secondoArray = ["Rosso", "Giallo"];
const listaEst = document.querySelector("ul.esterna");

for(let i = 0; i < primoArray.length; i++){
    const elementoEst = `<li>${primoArray[i]}</li>`;
    listaEst.innerHTML += elementoEst;
}