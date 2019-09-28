function addSideFx() {
  //   console.log("something happened I guess");
  var sideFxList = document.getElementById("side-fx-list");
  var sideFxListItem = document.createElement("LI");
  var sideFxListItemContent = document.getElementById("side-fx-list-input")
    .value;
  sideFxListItem.innerHTML = sideFxListItemContent;

  sideFxList.appendChild(sideFxListItem);
}
