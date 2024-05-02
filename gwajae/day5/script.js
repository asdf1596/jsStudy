function addItem() {
    var title = document.getElementById("titleInput").value;
    var value = document.getElementById("valueInput").value;
    if (title !== "" && value !== "") {
        var item = { title: title, value: value };
        var list = document.getElementById("itemList");
        var listItem = document.createElement("li");
        listItem.textContent = item.title + ": " + item.value;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "삭제";
        deleteButton.classList.add("deleteButton");
        deleteButton.onclick = function () {
            listItem.style.display = "none";
            document.getElementById("alim").style.display = "flex";
            document.getElementById("alim").textContent = "삭제되었습니다.";
            setTimeout(function () {
                document.getElementById("alim").style.display = "none";
            }, 3000);
        };
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
        document.getElementById("titleInput").value = "";
        document.getElementById("valueInput").value = "";
        document.getElementById("alim").style.display = "flex";
        document.getElementById("alim").textContent = "생성되었습니다.";
        setTimeout(function () {
            document.getElementById("alim").style.display = "none";
        }, 3000);
    } else {
        alert("제목과 값을 입력하세요!");
    }
}
