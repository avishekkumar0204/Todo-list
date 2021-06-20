let inpNewItem = document.getElementById("inpNewItem");
let btnClear = document.getElementById("btnClear");
let listGroup = document.getElementsByClassName("list-group")[0];
let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", function () {
    let inputByUser = inpNewItem.value;
    if (inputByUser) {
        let newListItem = document.createElement("li");
        newListItem.className = "list-group-item";

        newListItem.innerHTML += inputByUser;

        let f = 0;
        newListItem.addEventListener("click", function () {
            if (f == 0) {
                newListItem.style.textDecoration = "line-through";
                f = 1;
            }
            else {
                newListItem.style.textDecoration = "none";
                f = 0;
            }
        });
        let delBtn = `<i class="fas fa-trash-alt" id="delBtn"></i>`;

        newListItem.innerHTML += delBtn;
        delBtn = newListItem.childNodes[1];
        listGroup.insertAdjacentElement("afterbegin", newListItem);
        delBtn.addEventListener("click", function () {
            listGroup.removeChild(newListItem);
        });
        inpNewItem.value = "";

    }
    else {
        alert("Enter something");
    }

});

btnClear.addEventListener("click", function () {
    inpNewItem.value = "";
})

