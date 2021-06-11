let inpNewItem = document.getElementById("inpNewItem");
let btnAdd = document.getElementById("btnAdd");
let btnClear = document.getElementById("btnClear");
let btnSort = document.getElementById("btnSort");
let btnDelete = document.getElementById("btnDelete");
let listGroup = document.getElementsByClassName("list-group")[0];
btnAdd.addEventListener("click", function () {
    let inputByUser = inpNewItem.value;
    if (inputByUser) {
        let newListItem = document.createElement("li");
        newListItem.className = "list-group-item";
        newListItem.innerHTML = inputByUser;
        listGroup.appendChild(newListItem);
        inpNewItem.value = "";
    }

});