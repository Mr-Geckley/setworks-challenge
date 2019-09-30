let numberOfSideFx = 0;
let formField = document.getElementById("conditional-form-field");

function addSideFx() {
  // target the <ul>
  var sideFxList = document.getElementById("side-fx-list");
  // create an <li>
  var sideFxListItem = document.createElement("LI");
  // create a var that holds a string equal to what ever is in the text input
  var sideFxListItemContent = document.getElementById("side-fx-list-input")
    .value;
  // set the content of said <li> to equal what is in the text input field
  sideFxListItem.innerHTML = ` ${sideFxListItemContent} <button id="removeButton${numberOfSideFx}" type="button" onClick="removeSideFx(this.id)"> REMOVE </button>`;

  // add the populated <li> to the <ul>
  sideFxList.appendChild(sideFxListItem);

  numberOfSideFx++;
}

function wutevs() {
  console.log("wutevs");
}

function removeSideFx(n) {
  var targetElement = document.getElementById(n);
  targetElement.parentNode.remove();
}

function generateConditionalFormFields() {
  var yesPrn = document.getElementById("yes-prn");
  var noPrn = document.getElementById("no-prn");
  var yesPsy = document.getElementById("yes-psy");
  var noPsy = document.getElementById("no-psy");

  yesPrn.checked && yesPsy.checked ? generateExampleFormField() : wutevs();
}

function generateExampleFormField() {
  formField.innerHTML = `<p>Hey boo ;)</p>`;
}
