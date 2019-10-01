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

function wutevs(x) {
  console.log(`${x.parentNode.id}-list-input`);
}

function addListItem(x) {
  var targetList = x.nextElementSibling.firstElementChild;
  var newListItem = document.createElement("LI");
  var newListItemContent = document.getElementById(
    `${x.parentNode.id}-list-input`
  ).value;

  newListItem.innerHTML = ` ${newListItemContent} <button id="removeButton${numberOfSideFx}" type="button" onClick="removeSideFx(this.id)"> REMOVE </button>`;

  targetList.appendChild(newListItem);
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

// function generateExampleFormField() {
//   formField.innerHTML = `<p>Hey boo ;)</p>`;
// }

// generateYesPrnAndYesPsyForm(){
//     // add file picker and criteria list creator here
//     formField.innerHTML = ``
// }

// generateYesPrnAndNoPsyForm(){
//     // add add list criteria creator here
// }

// generateNoPrnAndYesPsyForm(){
//     // add "form on back" here
//     // symptom list
//     // radio: yes/no about how to collect data
//     // text area
//     // file picker for additional info
// }

// generateNoPrnAndNoPsyForm(){
//     // don't add anything or remove formField
// }

function generateDataCollectionMethodsInput() {
  var targetElement = document.getElementById(
    "data-collection-methods-container"
  );
  var yesCollect = document.getElementById("yes-collect-data");
  var dontCollect = document.getElementById("dont-collect-data");

  if (yesCollect.checked) {
    targetElement.innerHTML = `<label for="data-collection-methods"
        >Describe methods for data collection:
        <abbr title="required">*</abbr>
      </label>
      <div>
        <textarea
          name="data-collection-methods"
          id="data-collection-methods"
          cols="30"
          rows="10"
        ></textarea>
      </div>`;
  } else {
    targetElement.innerHTML = ``;
  }
}
