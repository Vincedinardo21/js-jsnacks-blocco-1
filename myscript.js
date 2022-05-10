// Arrays
var primoArray = ["Aniello", "Oronzo", "Loredano", "Teodomildo", "Ezechiele"];
var secondoArray = ["Rosso", "Giallo"];

for(let i = 0; i < primoArray.length; i++){
    const ulEst = document.querySelector("ul.esterna");
    const liEst = document.createElement("li");
    liEst.append(primoArray[i]);
    ulEst.append(liEst);
    for(let j = 0; j < secondoArray.length; j++){
        const ulInt = document.querySelector("ul.interna");
        const liInt = document.createElement("li");
        liInt.append(secondoArray[j]);
        ulInt.append(liInt);
    }
}