var names = document.getElementById("names")
var input = document.getElementById("input")
var add = document.getElementById("add")
var removefirst = document.getElementById("removefirst")
var removelast = document.getElementById("removelast")
var age = document.getElementById("age")
var table = document.getElementById("myTable")


add.addEventListener("click", function myCreateFunction() {
  
  if(fullname.value, surname.value, age.value){
    var table = document.getElementById("myTable");
  var row = table.insertRow(4);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerText = fullname.value;
  cell2.innerText = surname.value;
  cell3.innerText = age.value;
    fullname.value = ""
    surname.value = ""
    age.value =  ""
  }else{
    alert("uzpildikyte laukeli")
  }
  
})
removefirst.addEventListener("click", function deleteFirst(){
  document.getElementById("myTable").deleteRow(1);
})

function deleteLast(){
    document.getElementById("myTable").deleteRow(3); 
}

function isInputNumber(evt){
  var ch = String.fromCharCode(evt.which);
  if(!(/[0-9]/.test(ch))){
    evt.preventDefault();
  }
}



