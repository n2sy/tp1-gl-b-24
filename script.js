const inpIntitule = document.getElementById("intitule");
const inpMontant = document.querySelector("#montant");
const btnAdd = document.getElementById("btn-add");
const listDepenses = document.getElementById("list-dep");

// function traitement() {
//   console.log("Click détecté");
// }
//btnAdd.addEventListener("click", traitement());
//btnAdd.addEventListener("click", traitement);
btnAdd.addEventListener("click", () => {
  console.log(typeof inpIntitule.value, typeof inpMontant.value);

  let newLabel = document.createElement("ion-label");
  let newTxt = document.createTextNode(`
    ${inpIntitule.value} : ${inpMontant.value} $
  `);
  //newLabel.value = inpIntitule.value + " : " + inpMontant.value + " $";
  newLabel.appendChild(newTxt);
  let newItem = document.createElement("ion-item");
  newItem.appendChild(newLabel);
  listDepenses.appendChild(newItem);
});
