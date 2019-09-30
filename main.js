let numberOfSideFx = 0;

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
