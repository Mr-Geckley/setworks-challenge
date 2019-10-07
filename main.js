let numberOfSideFx = 0;
let formField = document.getElementById("conditional-form-field");
let numberOfErrors = 0;

/**
 * create and <li> and add it to target <ul>
 * @param{clicked button}
 */
function addListItem(x) {
  var targetList = x.nextElementSibling.firstElementChild;
  var newListItem = document.createElement("LI");
  var newListItemContent = document.getElementById(
    `${x.parentNode.id}-list-input`
  ).value;

  newListItem.innerHTML = ` ${newListItemContent} <button class="rmv_btn" id="removeButton${numberOfSideFx}" type="button" onClick="removeListItem(this.id)"> Remove </button>`;

  targetList.appendChild(newListItem);

  numberOfSideFx++;
}

/**
 * create and return new time input
 * called by 'populateRxTimesSpan()'
 */
function generateTimePickerInput() {
  var newDiv = document.createElement("DIV");
  newDiv.innerHTML = `<input
  type="text"
  name="time-of-dose"
  pattern="^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$"
  placeholder="00:00"
  onblur="emptyFieldErrMsg(this)"
  required
/>
<p class="err-msg"></p>`;
  return newDiv;
}

/**
 * generates 'n' number of time inputs
 * @param {number} n
 */
function populateRxTimesInputSpan(n) {
  var rxTimesInputDiv = document.getElementById("rx-times-input");
  rxTimesInputDiv.innerHTML = "";
  for (i = 0; i < n; i++) {
    rxTimesInputDiv.appendChild(generateTimePickerInput());
  }
}

/**
 * remove clicked <li> from parent <ul>
 * @param {object} n
 */
function removeListItem(n) {
  var targetElement = document.getElementById(n);
  targetElement.parentNode.remove();
}

/**
 * dynamically creates form fields based on characteristics of medication
 */
function generateConditionalFormFields() {
  var yesPrn = document.getElementById("yes-prn");
  var noPrn = document.getElementById("no-prn");
  var yesPsy = document.getElementById("yes-psy");
  var noPsy = document.getElementById("no-psy");

  if (yesPrn.checked && yesPsy.checked) {
    generateYesPrnAndYesPsyForm();
  }

  if (yesPrn.checked && noPsy.checked) {
    generateYesPrnAndNoPsyForm();
  }

  if (noPrn.checked && yesPsy.checked) {
    generateNoPrnAndYesPsyForm();
  }

  if (noPrn.checked && noPsy.checked) {
    generateNoPrnAndNoPsyForm();
  }
}

/**
 * populates conditional form field
 * called by 'generateConditionalFormFields()'
 */
function generateYesPrnAndYesPsyForm() {
  formField.innerHTML = `<div class="prn-criteria form-field" id="prn-criteria">
    <label for="prn-criteria-list-input" class="label-font">
      List the exact criteria for administering the medication as a
      PRN</label
    >
    <input
      type="text"
      id="prn-criteria-list-input"
      name="prn-criteria-list-input"
      placeholder=""
      required
      onblur="emptyFieldErrMsg(this)"
    />
    <p class="err-msg"></p>
    <button
      type="button"
      class="prn-criteria-enter"
      onclick="addListItem(this)"
    >
      Add Criteria
    </button>
    <div class="prn-criteria-items">
      <ul id="prn-criteria-list"></ul>
    </div>
  </div>
  <div class="form-field">
    <label for="external-form-file" class="label-font"
      >Upload a completed copy of the ​PRN Psychotropic Behavioral and
      Procedural Criteria
    </label>
    <input type="file" id="external-form-file" name="external-form-file" onblur="emptyFieldErrMsg(this)"  multiple required/>
    <p class="err-msg"></p>
</div>`;
}

/**
 * populates conditional form field
 * called by 'generateConditionalFormFields()'
 */
function generateYesPrnAndNoPsyForm() {
  formField.innerHTML = `<div class="prn-criteria" id="prn-criteria">
    <label for="prn-criteria-list-input" class="label-input">
      List the exact criteria for administering the medication as a
      PRN</label
    >
    <input
      type="text"
      id="prn-criteria-list-input"
      name="prn-criteria-list-input"
      placeholder=""
      required
      onblur="emptyFieldErrMsg(this)"
    />
    <p class="err-msg"></p>
    <button
      type="button"
      class="prn-criteria-enter"
      onclick="addListItem(this)"
    >
      Add Criteria
    </button>
    <div class="prn-criteria-items">
      <ul id="prn-criteria-list"></ul>
    </div>
</div>`;
}

/**
 * populates conditional form field
 * called by 'generateConditionalFormFields()'
 */
function generateNoPrnAndYesPsyForm() {
  formField.innerHTML = `   <fieldset>
    <legend>PSYCHOTROPIC INFORMATION</legend>
    <div class="psy-info-provider">
      <label for="psy-info-provider" class="label-font"
        >Name of person providing information on pyschotropic medication:
        <abbr title="required" aria-label="required">*</abbr></label
      >
      <input
        id="psy-info-provider"
        type="text"
        name="psy-info-provider"
        onblur="emptyFieldErrMsg(this)"
        required
      />
      <p class="err-msg"></p>
    </div>
    <label for="psy-info-date" class="label-font">Today's date:</label>

    <input type="date" name="psy-info-date" required/>
    <p class="err-msg"></p>

    <div class="addtl-psy-info" id="addtl-psy-info">
      <label for="addtl-psy-info-list-input" class="label-font">
        List the exact criteria for administering the medication as a
        PRN</label
      >
      <input
        type="text"
        id="addtl-psy-info-list-input"
        name="addtl-psy-info-list-input"
        placeholder=""
        onblur="emptyFieldErrMsg(this)"
        required
      />
      <p class="err-msg"></p>
      <button
        type="button"
        class="addtl-psy-info-enter"
        onclick="addListItem(this)"
      >
        Add Criteria
      </button>
      <div class="addtl-psy-info-items">
        <ul id="addtl-psy-info-list"></ul>
      </div>
    </div>
  </fieldset>
  <fieldset>
    <legend class="label-font">
      Do you want us to collect data on these behaviors?
      <abbr title="required" aria-label="required">*</abbr>
    </legend>

    <!-- yes -->
    <div>
      <label for="yes-collect-data">Yes</label>
      <input
        type="radio"
        id="yes-collect-data"
        name="collect-data-yes-or-no"
        value="yes-collect-data"
        onclick="generateDataCollectionMethodsInput()"
        required
      />
      <p class="err-msg"></p>
    </div>
    <!-- no -->
    <div>
      <label for="dont-collect-data">No</label>
      <input
        type="radio"
        id="dont-collect-data"
        name="collect-data-yes-or-no"
        value="dont-collect-data"
        onclick="generateDataCollectionMethodsInput()"
        required
      />
      <p class="err-msg"></p>
    </div>
    <div
      class="data-collection-methods-container"
      id="data-collection-methods-container"
    ></div>
  </fieldset>
  <label for="addtl-psy-info-file" class="label-font"
    >Please send us any other relevant information regarding this
    non-<strong><abbr title="Pro re nata">PRN</abbr></strong> psychotropic
    medication:
  </label>
  <input
    type="file"
    id="addtl-psy-info-file"
    name="addtl-psy-info-file"
    multiple
    onblur="emptyFieldErrMsg(this)"
    required
  />
  <p class="err-msg"></p>`;
}

/**
 * depopulates conditional form field
 * called by 'generateConditionalFormFields()'
 */
function generateNoPrnAndNoPsyForm() {
  formField.innerHTML = "";
}

/**
 * creates text area input as per informational requirements
 */
function generateDataCollectionMethodsInput() {
  var targetElement = document.getElementById(
    "data-collection-methods-container"
  );
  var yesCollect = document.getElementById("yes-collect-data");

  if (yesCollect.checked) {
    targetElement.innerHTML = `<label for="data-collection-methods" class="label-font"
        >Describe methods for data collection:
        
      </label>
      <div>
        <textarea
          name="data-collection-methods"
          id="data-collection-methods"
          cols="40"
          rows="5"
          requried
          onblur="emptyFieldErrMsg(this)"
        ></textarea>
        <p class="err-msg"></p>

      </div>`;
  } else {
    targetElement.innerHTML = ``;
  }
}

/**
 * generates alert message on form "submission" featuring name if first form field as per requirements
 */

function submissionAlert() {
  var alertMsgSubject = document.getElementById("client-name").value;
  if (numberOfErrors < 1) {
    window.alert(
      `Thank you, we received the information regarding the medication for ${alertMsgSubject}, you can expect a confirmation email in a few minutes.`
    );
  } else {
    window.alert(
      `Please complete all form fields before submitting, thank you.`
    );
  }
}

function emptyFieldErrMsg(inputField) {
  if (inputField.value == 0) {
    inputField.nextElementSibling.innerHTML =
      "Please fill out this field. Thank you.";
    numberOfErrors++;
  }
  if (inputField.value != 0) {
    inputField.nextElementSibling.innerHTML = "";
    numberOfErrors--;
  }
}

// function emptyTimeErrMsg(inputField) {
//   if (inputField.value === "00:00") {
//     inputField.nextElementSibling.innerHTML =
//       "Please specify a time. Thank you.";
//     numberOfErrors++;
//     inputField.innerHTML = "Please specify a time";
//   }
//   if (inputField.value != "00:00") {
//     inputField.nextElementSibling.innerHTML = "";
//     numberOfErrors--;
//   }
// }

function wutevs(x) {
  console.log(`wutevs`);
}
