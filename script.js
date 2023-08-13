var row = null;
function submit(event) {
   event.preventDefault();
  var enterdData = retriveData();
    // console.log(enterdData);
 


  var readData = readingDataFromStorage(enterdData);
//  console.log(readData);
  if(enterdData==false){
    msg.innerHTML=`<h3 style="color: red">data can't be blanked</h3>`;
  }
  else{

  if (row == null) {
    insert(readData);
    msg.innerHTML = `<h3 style="color: green">Data inserted!</h3>`;
  } else {
    Update();
    msg.innerHTML = `<h3 style="color: orange">Data updated!</h3>`;
  }

  
  }
document.getElementById("name").value='';
document.getElementById("job").value='';
document.getElementById("experience").value='';

}




// CREATE
// Retrive data from form
function retriveData() {
  console.log("hello");

  var name1 = document.getElementById("name").value;
  var job1 = document.getElementById("job").value;
  var exp1 = document.getElementById("experience").value;

  var arr = [name1, job1, exp1];

  console.log(arr);
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}
// data in local storage
function readingDataFromStorage(enterdData) {
  // sroring data in local storage
  var n = localStorage.setItem("Name", enterdData[0]);
  var j = localStorage.setItem("Job", enterdData[1]);
  var e = localStorage.setItem("Experience", enterdData[2]);

  // getting values form a table
  var n1 = localStorage.getItem("Name",n);
  var j1 = localStorage.getItem("Job",j);
  var e1 = localStorage.getItem("Experience",e);

  var arr = [n1, j1, e1];
  return arr;
}

//READ
function insert(readData) {
 // console.log("new data")
  let tbody = document.getElementById('tb');
  var row = tbody.insertRow();

//console.log(row)
console.log(tbody)
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = `<button onclick=edit(this)>edit</button>
                             <button onclick=remove(this)>delete</button>`;
}

//EDIT

function edit(td) {
  row = td.parentElement.parentElement;

  // check which fields work on the table data or table row
  // console.log(td.parentElement.parentElement);
  document.getElementById("name").value = row.cells[0].innerHTML;
  document.getElementById("job").value = row.cells[1].innerHTML;
  document.getElementById("experience").value = row.cells[2].innerHTML;

}

// Update

function Update() {

  row.cells[0].innerHTML = document.getElementById("name").value;
  row.cells[1].innerHTML = document.getElementById("job").value;
  row.cells[2].innerHTML = document.getElementById("experience").value;
  row = null;
}

// DELETE
function remove(td) {
  var check=confirm("are you want to delete this record");
  if(check==true){
    msg.innerHTML=`<h3 style="color: green">record should be deleted succesfully</h3>`;
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    row=null;
  }
  else{
    msg.innerHTML=`<h3 style="color: orange">record should not be deleted</h3>`;
  }
}

function removeAll(){
  var del=confirm("permission all table data deleted");
  if(del==true){
    document.getElementById("tb").innerHTML="";
   msg.innerHTML=` <h3 style="color: green">Full table deleted</h3>`

  }
  

}
