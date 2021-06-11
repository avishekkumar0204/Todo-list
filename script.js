let inpNewItem = document.getElementById("inpNewItem");
let btnClear = document.getElementById("btnClear");
let listGroup = document.getElementsByClassName("list-group")[0];

btnAdd.addEventListener("click", function () {
    let inputByUser = inpNewItem.value;
    if (inputByUser) {
        let newListItem = document.createElement("li");
        newListItem.className = "list-group-item";
        newListItem.innerHTML=`<i class="far fa-check-circle"></i>`;
        newListItem.innerHTML += inputByUser;
        listGroup.appendChild(newListItem);
        inpNewItem.value = "";
        newListItem.innerHTML+=`<i class="fas fa-trash-alt"></i>`;
    }

});

btnClear.addEventListener("click", function () {
    inpNewItem.value = "";
})

