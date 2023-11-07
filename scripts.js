
function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var row1 = row.insertCell(0);
    var row2 = row.insertCell(1);
    var row3 = row.insertCell(2);
    var row4 = row.insertCell(3);
    var row5 = row.insertCell(4);
    row1.innerHTML = "<input type='text' />";
    row2.innerHTML = "<input type='text' />";
    row3.innerHTML = "<input type='text' />";
    row4.innerHTML = "<input type='text' />";
    row5.innerHTML = "<button  class=buttons onclick='saveRow(this)'>Save</button> <button class=buttons onclick='cancelRow(this)'>Cancel</button>";
}

function editRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < 4; i++) {
        var value = cells[i].innerText;
        cells[i].innerHTML = "<input type='text' value='" + value + "' />";
    }
    var actionCell = cells[4];
    actionCell.innerHTML = "<button class=buttons onclick='saveRow(this)'>Save</button> <button class=buttons onclick='cancelRow(this)'>Cancel</button>";
}

function saveRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < 4; i++) {
        var input = cells[i].getElementsByTagName("input")[0];
        cells[i].innerHTML = input.value;
    }
    var actionCell = cells[4];
    actionCell.innerHTML = "<button class=buttons  onclick='editRow(this)'>Edit</button> <button class=buttons onclick='deleteRow(this)'>Delete</button>";
}

function cancelRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");
    for (var i = 0; i < 4; i++) {
        var input = cells[i].getElementsByTagName("input")[0];
        cells[i].innerHTML = input.defaultValue;
    }
    var actionCell = cells[4];
    actionCell.innerHTML = "<button  class=buttons onclick='editRow(this)'>Edit</button> <button class=buttons onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
