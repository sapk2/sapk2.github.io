var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["employeecode"] = document.getElementById("employeecode").value;
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["persalary"] = document.getElementById("persalary").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.employeecode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.persalary;
    cell4 = newRow.insertCell(4);
      cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
      alert('Data is saved successfully');
}

//Edit the data
function onEdit(td) {
    if (confirm('Are you sure to update this record ?')) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("employeecode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("persalary").value = selectedRow.cells[3].innerHTML;
}}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.employeecode;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.persalary;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('empList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("employeecode").value = '';
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("persalary").value = '';
    selectedRow = null;
}
//validate 
function validate() {
    isValid = true;
    if (document.getElementById("ame").value == "") {
      isValid = false;
      document.getElementById("nameValidationError").classList.remove("hide");
    } else {
      isValid = true;
      if (!document.getElementById("nameValidationError").classList.contains("hide"))
        document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
  }