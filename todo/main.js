'use strict';

let  itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);+

function addItem() {
    let item = document.querySelector(".item").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }

    showList();
}